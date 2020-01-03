import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-formexamples',
  templateUrl: './formexamples.component.html',
  styleUrls: ['./formexamples.component.css']
})
export class FormexamplesComponent implements OnInit {

  constructor() {
  }


  @ViewChild('formElement', {static: false}) formElement: NgForm;
  answer;
  genders = ['male', 'female'];
  submitted = false;
  user = {
    username: '',
    mail: '',
    question: '',
    answer: '',
    gender: ''
  };

  ngOnInit() {
  }

  onSubmit() {
    if (this.formElement.valid) {
      this.submitted = true;
      this.user.username = this.formElement.value.userData.username;
      this.user.mail = this.formElement.value.userData.mail;
      this.user.answer = this.formElement.value.userData.questionAnswer;
      this.user.question = this.formElement.value.userData.secret;
      this.user.gender = this.formElement.value.userData.gender;
      this.formElement.reset();
    }

  }

  onsuggUsername() {
    /* this.formElement.setValue({
       userData: {
         username: 'kalaiselvan',
         mail: '',
         secret: 'pet',
         questionAnswer: '',
         gender: 'male'
       }
     });*/
    this.formElement.form.patchValue(
      {
        userData: {
          username: 'kalaiselvan',
          secret: 'pet',
          questionAnswer: '',
          gender: 'male'
        }
      }
    );
  }

}
