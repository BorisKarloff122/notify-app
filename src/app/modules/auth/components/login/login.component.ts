import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";
import {checkPassword, checkUser} from "../../../../shared/utils/utils";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public showPassword: boolean = false;
  public errorMesg: string  = 'You must fill all fields correctly';
  public showMessg: boolean = false;
  public form: FormGroup = this.fb.group({
    login:['', [Validators.required, Validators.minLength(7)]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });
  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public toggleShow(): void{
    this.showPassword = !this.showPassword;
  }

  public ctrlGet(name: string): string{
    return this.form.controls[name].value;
  }

  public submitForm(): void{
      if(this.form.valid){
      //   this.dataService.login(this.form.value).subscribe((res)=>{
      //     console.log(res);
      //   }, error => {
      //     console.log(error);
      //   });
      // } else{
      //   console.log(this.form)
        this.dataService.getUsers().subscribe((res)=>{
          let user = checkUser(res, this.form.value);
          if(user){
            let passValidation = user ? checkPassword(user, this.form.value) : false;
            passValidation ? this.router.navigate(['/main',{id: user.id}]) : this.errorMesg = 'Wrong password!'
            return
          } else{
            this.errorMesg = 'User does not exist';
            return;
          }
        });
      }
  }

}
