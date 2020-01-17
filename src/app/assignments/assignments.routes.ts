import {Routes} from '@angular/router';
import {AssignmentfiveComponent} from './assignmentfive/assignmentfive.component';
import {ReactiveformassignmentsComponent} from './reactiveformassignments/reactiveformassignments.component';

export const routes: Routes = [
  {
    path: 'five', component: AssignmentfiveComponent
  },
  {
    path: 'reactiveassignment', component: ReactiveformassignmentsComponent
  }
];
