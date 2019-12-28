import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ServerComponent} from './server/server.component';
import {ServersComponent} from './servers/servers.component';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  /* {path: '', component: ServersComponent},
   {path: 'servers', component: ServersComponent}*/
  {path: '', redirectTo: '/recipe', pathMatch: 'full'},
  {path: 'recipe', component: RecipesComponent},
  {path: 'shoppinglist', component: ShoppingListComponent},
  {path: 'assignment', loadChildren: () => import('./assignments/assignments.module').then(m => m.AssignmentsModule)},
  {path: 'example', loadChildren: () => import('./example/example.module').then(m => m.ExampleModule)},
  {path: 'pagenotfound', component: PagenotfoundComponent, data: {message: ' Page not found!....'}},
  {path: '**', redirectTo: '/pagenotfound', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
