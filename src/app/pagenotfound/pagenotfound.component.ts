import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  errorMessage: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.errorMessage = this.route.snapshot.data['message'];
  }

}
