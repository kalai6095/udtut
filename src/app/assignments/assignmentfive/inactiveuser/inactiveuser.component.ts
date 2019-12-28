import {Component, Input, OnInit} from '@angular/core';
import {AssignmentfiveService} from '../../services/assignmentfive.service';

@Component({
  selector: 'app-inactiveuser',
  templateUrl: './inactiveuser.component.html',
  styleUrls: ['./inactiveuser.component.css']
})
export class InactiveuserComponent implements OnInit {

  @Input() inactiveUser: string;
  @Input() index: number;

  constructor(private assignmentfiveService: AssignmentfiveService) {
  }

  ngOnInit() {
  }

  setToActive() {
    this.assignmentfiveService.setToActive(this.index);
  }

}
