import { LoginComponent } from './dashboard/components/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
    { path: 'recipe-list', component: RecipeListComponent },
    { path: 'recipe-list/:recipeId', component: RecipeDetailComponent },
  ]
},
  { path: 'login', component: LoginComponent }/*,
  { path: 'recipe-list/:recipeId', component: RecipeDetailComponent },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
