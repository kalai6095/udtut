import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PathparamsComponent} from './pathparams/pathparams.component';
import {AuthGuardService} from './auth-guard.service';
import {CanactivatedComponent} from './canactivated/canactivated.component';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
import {AuthenticationsComponent} from './authentications/authentications.component';
import {ServerResolver} from './server-resolver.service';
import { ObserableexampleComponent } from './obserableexample/obserableexample.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes: Routes = [
  {path: 'routing/:id', component: PathparamsComponent},
  {
    path: 'isauth',
    canActivate: [AuthGuardService],
    canDeactivate: [CanDeactivateGuard],
    component: CanactivatedComponent,
   /* resolve: {server: ServerResolver}*/
  },
  {path: 'auth/:type', component: AuthenticationsComponent},
  {path:'observable',component:ObserableexampleComponent},
  {path:'subjects',component:SubjectsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule {
}
