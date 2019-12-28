import {Component, OnInit} from '@angular/core';
import {AssignmentfiveService} from '../services/assignmentfive.service';

@Component({
  selector: 'app-assignmentfive',
  templateUrl: './assignmentfive.component.html',
  styleUrls: ['./assignmentfive.component.css']
})
export class AssignmentfiveComponent implements OnInit {

  activeUsers = [];
  inactiveUsers = [];

  constructor(private assignmentfiveService: AssignmentfiveService) {
  }

  ngOnInit() {
    this.activeUsers = this.assignmentfiveService.activeUsers;
    this.inactiveUsers = this.assignmentfiveService.inactiveUsers;
  }

}
