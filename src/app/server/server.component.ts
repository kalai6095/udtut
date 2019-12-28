import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Server} from '../common/server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input() isadd: boolean;
  @Input() isupdate: boolean;
  @Input() editindex: number;
  @Input() serverName: Server;
  @Output() updateServerevent = new EventEmitter<Server>();
  @Output() addServerevent = new EventEmitter<Server>();


  //@ViewChild('localtemp', {static: false}) inputElement;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    if (this.serverName == null || this.serverName === undefined) {
      this.serverName = new Server('', '', '', '');

   //   this.inputElement.value = this.serverName.localtemp;
    }
  }

  addServer(inputElement: HTMLInputElement) {
    if (this.serverName.name !== null && this.serverName.name !== '') {
      this.addServerevent.emit(new Server(this.serverName.name, this.serverName.type, this.serverName.content, inputElement.value));
      inputElement.value = '';
    } else {
      alert('Please add Server Name');
    }
  }

  updateServer(inputElement: HTMLInputElement) {
    this.serverName.localtemp = inputElement.value;
    this.updateServerevent.emit(this.serverName);
    inputElement.value = '';
  }


}
