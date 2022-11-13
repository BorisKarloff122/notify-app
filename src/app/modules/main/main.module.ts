import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from "./main-routing.module";
import {MainComponent} from "./components/main/main.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    MainComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSelectModule
  ]
})
export class MainModule { }
