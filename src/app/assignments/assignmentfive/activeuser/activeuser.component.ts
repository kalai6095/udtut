import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AssignmentfiveService} from '../../services/assignmentfive.service';

@Component({
  selector: 'app-activeuser',
  templateUrl: './activeuser.component.html',
  styleUrls: ['./activeuser.component.css']
})
export class ActiveuserComponent implements OnInit {

  @Input() activeuser: string;

  @Input() index: number;
  @Output() userSetToActive = new EventEmitter<number>();

  constructor(private assignmentfiveService: AssignmentfiveService) {
  }

  ngOnInit() {
  }

  setToInactive(id: number) {
    this.assignmentfiveService.setToInactive(this.index);
  }

}
