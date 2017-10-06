import { Component, Input } from '@angular/core';

@Component({
  selector: 'message-box',
  templateUrl: 'message-box.component.html',
  host: {
    '[style.justify-content]': '((!isFromSender) ? "flex-start" : "flex-end")',
    '[style.text-align]': '((!isFromSender) ? "left" : "right")'
  }
})
export class MessageBoxComponent {
  @Input() message;
  @Input() public isFromSender;

  constructor() {

  }

}
