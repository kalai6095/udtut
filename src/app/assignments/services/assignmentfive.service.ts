import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssignmentfiveService {
  activeUsers = ['user-1', 'user-3'];
  inactiveUsers = ['user -2', 'user-4'];

  constructor() {
  }

  setToActive(id: number) {
    alert(id);
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }
}
