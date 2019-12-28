import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-pathparams',
  templateUrl: './pathparams.component.html',
  styleUrls: ['./pathparams.component.css']
})
export class PathparamsComponent implements OnInit {

  pathparamid: number;
  queryparamvalue: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

    /* using snapshot*/
    /*this.route.snapshot.queryParams;
    this.route.snapshot.params;
    this.route.snapshot.fragment;*/

    /* for getting  path params */
    const subscription = this.route.params.subscribe((params: Params) => {
      this.pathparamid = params.id;
    });
    const queryp = this.route.queryParams.subscribe((params: Params) => {
      this.queryparamvalue = params;
    });
  }

}
