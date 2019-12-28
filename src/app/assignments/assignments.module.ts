import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AssignmentfiveComponent} from './assignmentfive/assignmentfive.component';
import {routes} from './assignments.routes';
import {RouterModule} from '@angular/router';
import {AssignmentfiveService} from './services/assignmentfive.service';
import { ActiveuserComponent } from './assignmentfive/activeuser/activeuser.component';
import { InactiveuserComponent } from './assignmentfive/inactiveuser/inactiveuser.component';


@NgModule({
  declarations: [AssignmentfiveComponent, ActiveuserComponent, InactiveuserComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [AssignmentfiveService]
})
export class AssignmentsModule {
}
