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

  ngOnInit() {
  }

  onSubmit() {
    if (this.formElement.valid) {
      console.log(this.formElement);
    }

  }

}
