import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-httpexample',
  templateUrl: './httpexample.component.html',
  styleUrls: ['./httpexample.component.css']
})
export class HttpexampleComponent implements OnInit {

  httpExampleForm: FormGroup;

  constructor(private  http: HttpClient) {
  }

  ngOnInit() {
    this.httpExampleForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    alert();
    this.http.post('https://ang-udtut-8.firebaseio.com/comments', this.httpExampleForm.value).subscribe((data) => {
      console.log(data);
    });
  }

}
