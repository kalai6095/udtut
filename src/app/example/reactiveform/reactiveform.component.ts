import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  reactiveForm: FormGroup;
  genders = ['male', 'female'];
  forbiddenUsername = ['kalaiselvan', 'Kurtiss'];

  constructor() {
  }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      username: new FormControl('kalaiselvan', [Validators.required, this.forbiddenNames.bind(this)]),
      email: new FormControl(null,
        [Validators.required,
          Validators.email], this.forbiddenEmails),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
    this.reactiveForm.valueChanges.subscribe((values) => {
      console.log(values);
    });
  }

  onSubmit() {
    if (!this.reactiveForm.invalid) {
      console.log(this.reactiveForm.value);
    }
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray> this.reactiveForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsername.indexOf(control.value) !== 1) {
      return {nameisForbidden: true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'kalai6095@gmail.com') {
          resolve({emailIsForbidden: true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}
