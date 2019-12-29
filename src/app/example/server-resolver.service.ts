import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

interface Server {
  id: number;
  name: string;
  status: string;
}

export class ServerResolver implements Resolve<Server> {


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    return {id: 1, name: 'test', status: 'true'};
  }

}
