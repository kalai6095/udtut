import {Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {Server} from '../../common/server.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-servertable]',
  templateUrl: './servertable.component.html',
  styleUrls: ['./servertable.component.css']
})
export class ServertableComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input('src') server: { name: string, type: string, content: string };
  @Input() index: number;
  @Output() editserver = new EventEmitter<Server>();
  @Output() deleteserver = new EventEmitter<Server>();

  constructor() {
  }

  ngOnInit() {

  }

  ngDocheck() {
    console.log('----------------------------------------------------------docheck -------------------');
  }

  ngOnChanges() {
    console.log('----------------------------------------------------------changes -------------------');
  }

  edit(i) {
    this.editserver.emit(i);
  }

  delete() {
    this.deleteserver.emit();
  }

  ngDoCheck(): void {
  }

  ngOnDestroy(): void {
    console.log('=----------------------------destory---------------------');
  }


}
