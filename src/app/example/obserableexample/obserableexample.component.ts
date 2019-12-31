import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, observable, Subscription } from 'rxjs';
import {map,filter} from 'rxjs/operators';


@Component({
  selector: 'app-obserableexample',
  templateUrl: './obserableexample.component.html',
  styleUrls: ['./obserableexample.component.css']
})
export class ObserableexampleComponent implements OnInit,OnDestroy {

  constructor() { }
  customInt:Subscription;
  count:number=0;
  errorMsg;
  ngOnInit() {

    const customIntervalObservable=Observable.create(observer=>{
      let count=0;
      setInterval(()=>{
        if(count===4){
          observer.complete();
        }
        if(count>5){
          observer.error(new Error('Count is greater 5!'));
        }
        observer.next(count);
        count++;
      },1000)
    })

    customIntervalObservable.pipe(map((data:number)=>{
        return 'Round :'+ (data+1);
      })
    )

  /*this.customInt=  customIntervalObservable.subscribe(data=>{
    this.count=data;
    },error=>{
      this.errorMsg=error
    },()=>{
      this.errorMsg="Completed!....";
    })*/



    this.customInt =  customIntervalObservable.pipe(
      map((data:number)=>{
        return 'Round :'+ (data+1);
      }),
      filter((data:number)=>{
        return data>0;
      })
    ).subscribe(data=>{
    this.count=data;
    },error=>{
      this.errorMsg=error
    },()=>{
      this.errorMsg="Completed!....";
    })
  }
ngOnDestroy(){
this.customInt.unsubscribe();
}


}
