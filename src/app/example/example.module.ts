import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExampleRoutingModule} from './example-routing.module';
import {PathparamsComponent} from './pathparams/pathparams.component';
import {AuthService} from './auth.service';
import {AuthGuardService} from './auth-guard.service';
import {CanactivatedComponent} from './canactivated/canactivated.component';
import {AuthenticationsComponent} from './authentications/authentications.component';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
import {ObserableexampleComponent} from './obserableexample/obserableexample.component';
import {SubjectsComponent} from './subjects/subjects.component';
import {FormexamplesComponent} from './formexamples/formexamples.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveformComponent} from './reactiveform/reactiveform.component';
import {HttpexampleComponent} from './httpexample/httpexample.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [PathparamsComponent, CanactivatedComponent, AuthenticationsComponent,
    ObserableexampleComponent, SubjectsComponent, FormexamplesComponent, ReactiveformComponent, HttpexampleComponent],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuardService, CanDeactivateGuard]
})
export class ExampleModule {
}
