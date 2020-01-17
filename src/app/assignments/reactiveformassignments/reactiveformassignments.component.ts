import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-reactiveformassignments',
  templateUrl: './reactiveformassignments.component.html',
  styleUrls: ['./reactiveformassignments.component.css']
})
export class ReactiveformassignmentsComponent implements OnInit {
  projectsStaus = ['-Select-', 'Stable', 'Critical', 'Finished'];
  reactiveAssignmentForm: FormGroup;
  projectNameforbitten = ['Sample', 'Angular'];

  constructor() {
  }


  ngOnInit() {
    this.reactiveAssignmentForm = new FormGroup({
      name: new FormControl('', [Validators.required, this.onProjectNameForbitten.bind(this)]),
      email: new FormControl('', [Validators.required, Validators.email], this.onEmailforbidd),
      status: new FormControl('Critical', [Validators.required])
    });
  }

  onSubmit() {
    if (this.reactiveAssignmentForm.valid) {
      console.log(this.reactiveAssignmentForm);
    }
  }

  onProjectNameForbitten(control: FormControl): { [s: string]: boolean } {
    if (this.projectNameforbitten.indexOf(control.value) !== -1) {
      return {nameisForbidden: true};
    }
    return null;
  }

  onEmailforbidd(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'kalai6095@gmail.com') {
          resolve({invalidemail: true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
