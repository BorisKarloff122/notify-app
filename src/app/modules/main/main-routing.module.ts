import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {SettingsComponent} from "./components/settings/settings.component";


const routes: Routes = [
  {path:'', component: MainComponent, pathMatch:'full'},
  {path:'settings', component: SettingsComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
