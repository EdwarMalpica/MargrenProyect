import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardProductsComponent } from './dashboard/dashboard-products/dashboard-products.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  // { path: "home", component: UserDashboardComponent },
  { path: "login", component: LoginComponent },
  { path: "products", component: ProductsComponent },
  {
    path: "dashboard", component: UserDashboardComponent, children: [
      { path: "products", component: DashboardProductsComponent }
    ]
  },
  // { path: '**', component: HomeComponent }
  // { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
