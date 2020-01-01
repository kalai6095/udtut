import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../subjects.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  activated=false;
  subscription:Subscription;
  constructor(private subjectService:SubjectsService) { }

  ngOnInit() {
   this.subscription= this.subjectService.activatedEmitter.subscribe((data)=>{
      this.activated=data;
    })
  }

  onActivate(){
   this.subjectService.activatedEmitter.next(true);
  }
}
