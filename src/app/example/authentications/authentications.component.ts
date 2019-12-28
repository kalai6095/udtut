import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-authentications',
  templateUrl: './authentications.component.html',
  styleUrls: ['./authentications.component.css']
})
export class AuthenticationsComponent implements OnInit {
  authType: string;

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.authType = params.type;
      switch (this.authType) {
        case 'login': {
          this.authService.login();
          this.router.navigate(['/example/isauth']);
          break;
        }
        case 'logout': {
          this.authService.logout();
          this.router.navigate(['/example/isauth']);
          break;
        }
        default:
          this.router.navigate(['/example/isauth']);
          break;
      }
    });
  }

}
