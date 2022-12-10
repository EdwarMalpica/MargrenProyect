import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboarRecipesComponent } from './dashboard/dashboar-recipes/dashboar-recipes.component';
import { DashboardProductsComponent } from './dashboard/dashboard-products/dashboard-products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RecipeComponent} from "./recipe/recipe.component";
import { DashboardAdminComponent} from "./dashboard/dashboard-admin/dashboard-admin.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";


const routes: Routes = [
  {path: 'recipe', component:RecipeComponent },
  {path: 'admin', component:DashboardAdminComponent },
  {path: 'register', component:RegisterComponent},
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "products", component: ProductsComponent },
  {
    path: "dashboard", component: UserDashboardComponent, children: [
      { path: "products", component: DashboardProductsComponent },
      { path: "recipes", component: DashboarRecipesComponent }
    ]
  },
  // { path: '**', component: HomeComponent }
  { path: '', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
