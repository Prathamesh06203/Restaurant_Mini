import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() ownerName: string = '';
  @Input() submittedData: any;
  @Output() testEvent = new EventEmitter<string>();

  sendEvent() {
    this.testEvent.emit('Triggered Event');
  }
}
