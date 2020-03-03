import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Post} from './post.model';
import {HttpreqService} from '../httpreq.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-httpexample',
  templateUrl: './httpexample.component.html',
  styleUrls: ['./httpexample.component.css']
})
export class HttpexampleComponent implements OnInit, OnDestroy {

  httpExampleForm: FormGroup;
  postData: Post[] = [];
  isfetching = false;
  error = null;
  private errorSub: Subscription;


  constructor(private  http: HttpClient, private httpreqService: HttpreqService) {
  }

  ngOnInit() {
    this.httpExampleForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required)
    });
    this.httpreqService.error.subscribe(errormsg => {
      this.error = errormsg;
      this.isfetching = false;
    });
    this.onfetchData(this);
  }

  onSubmit() {
    // alert(this.httpExampleForm.value);
    /* this.http.post('https://ang-udtut-8.firebaseio.com/posts.json', this.httpExampleForm.value)
       .subscribe((data) => {
         console.log(data);
       });*/
    this.httpreqService.createAndStorePost(this.httpExampleForm.value.title, this.httpExampleForm.value.content, this.onfetchData, this);

  }

  onfetchData(th) {
    if (th == null) {
      th = this;
    }
    th.isfetching = true;
    th.httpreqService.fetchPost().subscribe((data) => {
        console.log(data);
        th.postData = data;
        th.isfetching = false;
      }, (error => {
        this.httpreqService.error.next(error);
        //this.error = error;
      })
    );
  }

  clearPost(id) {
    this.httpreqService.deletePost(id).subscribe((data) => {
      this.onfetchData(this);
    });
  }

  ngOnDestroy(): void {
    this.httpreqService.error.unsubscribe();
  }

}
