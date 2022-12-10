import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeComponent} from "./recipe/recipe.component";
import { DashboardAdminComponent} from "./dashboard/dashboard-admin/dashboard-admin.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path: 'recipe', component:RecipeComponent },
  {path: 'admin', component:DashboardAdminComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component:RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
