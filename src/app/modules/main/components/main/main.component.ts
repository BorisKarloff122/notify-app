import { Component, OnInit } from '@angular/core';
import {IUserInfo} from "../../models/userInfo";
import {Observable} from "rxjs";
import {DataService} from "../../services/data.service";
import {IloginInfo} from "../../../auth/models/loginInfo";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public userId = 0;
  public userInfo$ = this.dataService.getUserInfo(this.userId);

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((res)=>{
      console.log(res);
    })
  }

}
