import { Component, OnInit } from '@angular/core';
import { FormBuilder,
  FormGroup,
  Validators } from "@angular/forms";
import {validatePassStrength} from "../../../../shared/validators/login.validators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    login: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(8), validatePassStrength]],
    passRepeat: ['', [Validators.required]]
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  public submitForm(): void{

      console.log(this.form.value);

  }

}
