import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class AppMessage {
    @Input() msg: String;
    @Input() type: String;
}