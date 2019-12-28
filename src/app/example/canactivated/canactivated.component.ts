import {Component, OnInit} from '@angular/core';
import {CanComponentDeactivate} from '../can-deactivate-guard.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-canactivated',
  templateUrl: './canactivated.component.html',
  styleUrls: ['./canactivated.component.css']
})
export class CanactivatedComponent implements OnInit, CanComponentDeactivate {

  constructor() {
  }

  ngOnInit() {
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return confirm('do u want to go back');
  }

}
