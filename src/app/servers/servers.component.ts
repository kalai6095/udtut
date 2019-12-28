import {AfterContentChecked, AfterContentInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Server} from '../common/server.model';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServersComponent implements OnInit, AfterContentInit, AfterContentChecked {
  isadd = true;
  isupdate = false;
  editindex = 0;
  serverName: Server = null;

  servers = [
    new Server('Server 1', 'server', 'Sample content from server1', 'local Template testing'),
    new Server('Server 2', 'blue server', 'Sample content from server2', 'local template testing')
  ];

  constructor() {

  }

  ngOnInit() {
    Swal.fire('Oops...', 'Something went wrong!', 'error');
  }

  onkeystorkeevent(event: Event) {
    // this.serverName = (event.target as HTMLInputElement).value;
  }

  addServer(serverData: Server) {
    this.servers.push(serverData);
    this.serverName = new Server('', '', '', '');
  }

  edit(i) {
    this.isadd = false;
    this.isupdate = true;
    this.serverName = this.servers[i];
    this.editindex = i;
  }

  delete(i) {
    this.servers.splice(i, 1);
  }

  updateServer(serverData: Server) {
    this.servers[this.editindex] = serverData;
    this.serverName = new Server('', '', '', '');
    this.isupdate = false;
    this.isadd = true;
  }

  ngAfterContentChecked(): void {
    console.log('----------------------------------after content checked ------------------');
  }

  ngAfterContentInit(): void {
    console.log('----------------------------------after content init ------------------');
  }


}
