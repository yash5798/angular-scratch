import 'zone.js/dist/zone';
import {
  Component,
  Output,
  EventEmitter,
  Input,
  NgModule,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
// import { fromEvent } from 'rxjs';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular  {{rData}}
    </a>

  `,
})
export class App {
  name = 'Angular';
  rData: any;

  receiveData(event) {
    console.log(111111111);
    this.rData = event;
  }
}
@Component({
  selector: 'myc-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <br/>
  <br/>
   <input type="text" placeholder="Enter Data" [value]="childData">
   <button (click)="sendData()">Send</button>
  `,
})
export class CApp implements OnInit {
  name = 'Angular111';
  @Output() outEvent: EventEmitter<any> = new EventEmitter();
  childData = '1223';
  ngOnInit() {
    console.log('Component loaded');
    this.outEvent.emit(this.childData);
  }
  sendData() {
    // console.warn(this.childData);
    console.warn(2344);
    this.outEvent.emit(this.childData);
  }
}

bootstrapApplication(App);
bootstrapApplication(CApp);
