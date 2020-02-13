import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Post} from './post.model';

@Component({
  selector: 'app-httpexample',
  templateUrl: './httpexample.component.html',
  styleUrls: ['./httpexample.component.css']
})
export class HttpexampleComponent implements OnInit {

  httpExampleForm: FormGroup;
  postData: Post[];
  isfetching = false;

  constructor(private  http: HttpClient) {
  }

  ngOnInit() {
    this.httpExampleForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required)
    });
    this.onfetchData();
  }

  onSubmit() {
    alert(this.httpExampleForm.value);
    this.http.post('https://ang-udtut-8.firebaseio.com/posts.json', this.httpExampleForm.value)
      .subscribe((data) => {
        console.log(data);
      });
  }

  onfetchData() {
    this.isfetching = true;
    this.http.get<{ [key: string]: Post }>('https://ang-udtut-8.firebaseio.com/posts.json')
      .pipe(map((responseData: { [key: string]: Post }) => {
          const postArray: Post[] = [];
          // tslint:disable-next-line:forin
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({...responseData[key], id: key});
            }
          }
          return postArray;
        })
      )
      .subscribe((data) => {
        console.log(data);
        this.postData = data;
        this.isfetching = false;
      });
  }

}
