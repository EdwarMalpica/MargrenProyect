import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent} from "./recipe/recipe.component";
import { DashboardAdminComponent} from "./dashboard/dashboard-admin/dashboard-admin.component";


const routes: Routes = [
  {path: 'recipe', component:RecipeComponent },
  {path: 'admin', component:DashboardAdminComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
