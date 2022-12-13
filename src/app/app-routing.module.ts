import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboarRecipesComponent } from './dashboard/dashboar-recipes/dashboar-recipes.component';
import { DashboardProductsComponent } from './dashboard/dashboard-products/dashboard-products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RecipeComponent} from "./recipe/recipe.component";
import { DashboardAdminComponent} from "./dashboard/dashboard-admin/dashboard-admin.component";
import {ProductsComponent} from "./products/products.component";
import {RegisterComponent} from "./register/register.component";
import {OurTeamComponent} from "./our-team/our-team.component";
import {AboutUsComponent} from "./about-us/about-us.component";


import {RecipesViewComponent} from "./recipes-view/recipes-view.component";

import { AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {ButtomInteractiveComponent} from "./buttom-interactive/buttom-interactive.component";
import {DashboardVendedorComponent} from "./dashboard/dashboard-vendedor/dashboard-vendedor.component";
import {DashboardConsumidorComponent} from "./dashboard/dashboard-consumidor/dashboard-consumidor.component";
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { RecipeViewStepsComponent } from './recipe-view-steps/recipe-view-steps.component';
import { MapViewComponent } from './map-view/map-view.component';




const routes: Routes = [
  { path: 'recipe', component:RecipeComponent },
  { path: 'register', component:RegisterComponent},
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },

  { path: "our-team", component: OurTeamComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "products", component: ProductsComponent },

  { path: "buyer", component: BuyerDashboardComponent},

  { path: 'admin', component:AdminDashboardComponent },
  { path: "user", component: UserDashboardComponent },
  { path: "buttom", component: ButtomInteractiveComponent},
  { path: "recipesView", component:RecipesViewComponent},
  { path: "recipeViewStep/:id", component: RecipeViewStepsComponent},

  { path: "map", component: MapViewComponent},


  {
    path: "dashboard", component: UserDashboardComponent, children: [
      { path: "products", component: DashboardProductsComponent },
      { path: "recipes", component: DashboarRecipesComponent },

    ]
  },
  {
    path: "dashboardadmin", component: AdminDashboardComponent, children: [
      { path: "products", component: DashboardProductsComponent },
      { path: "recipes", component: DashboarRecipesComponent },
      { path: 'homeadmin', component:DashboardAdminComponent },
      { path: "vendedor", component: DashboardVendedorComponent},
      { path: "consumidor", component: DashboardConsumidorComponent}
    ]
  },
  { path: "our", component: OurTeamComponent},
  // { path: '**', component: HomeComponent }
  { path: '', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
