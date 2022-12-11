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
import { RegisterComponent} from "./register/register.component";
import { AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import { OurTeamComponent} from "./our-team/our-team.component";


const routes: Routes = [
  { path: 'recipe', component:RecipeComponent },
  { path: 'register', component:RegisterComponent},
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: 'admin', component:AdminDashboardComponent },
  { path: "user", component: UserDashboardComponent },
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
      { path: 'homeadmin', component:DashboardAdminComponent }
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
