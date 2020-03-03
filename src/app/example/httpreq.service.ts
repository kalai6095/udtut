import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Post} from './httpexample/post.model';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, Subject, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpreqService {

  error = new Subject<string>();
  apiurl = 'https://ang-udtut-8.firebaseio.com/posts.json';

  constructor(private http: HttpClient) {
  }

  createAndStorePost(titletext: string, contenttext: string, callback, clz) {
    const postData: Post = {title: titletext, content: contenttext};
    this.http
      .post(this.apiurl,
        postData,
        {
          headers: new HttpHeaders({'Custom-header': 'Kalai'}),
          observe: 'body'
        })
      .subscribe((data) => {
        console.log(data);
        callback(clz);
      }, error => {
        this.error = error.message;
      });
  }

  fetchPost(): Observable<Post[]> {
    const searchParams = new HttpParams();
    searchParams.set('print', 'pretty');
    return this.http.get<{ [key: string]: Post }>(
      this.apiurl, {
        headers: new HttpHeaders({'Custom-header': 'Kalai'}),
        params: searchParams,

      })
      .pipe(map((responseData: { [key: string]: Post }) => {
          const postArray: Post[] = [];
          // tslint:disable-next-line:forin
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({...responseData[key], id: key});
            }
          }
          return postArray;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  deletePost(id) {
    return this.http.delete(
      'https://ang-udtut-8.firebaseio.com/posts/' + id + '.json',
      {
        observe: 'events',
        responseType: 'json'
      }).pipe(
      tap(event => {
        console.log(event);
        if (event.type === HttpEventType.Sent) {
          console.log(event);
        }
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      })
    );
  }
}
