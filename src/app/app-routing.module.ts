import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ServerComponent} from './server/server.component';
import {ServersComponent} from './servers/servers.component';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';


const routes: Routes = [
  /* {path: '', component: ServersComponent},
   {path: 'servers', component: ServersComponent}*/
  {path: 'recipe', component: RecipesComponent},
  {path: 'shoppinglist', component: ShoppingListComponent},
  {path: 'assignment', loadChildren: () => import('./assignments/assignments.module').then(m => m.AssignmentsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
