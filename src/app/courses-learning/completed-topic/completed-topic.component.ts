import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-completed-topic',
  templateUrl: './completed-topic.component.html',
  styleUrls: ['./completed-topic.component.css']
})
export class CompletedTopicComponent {
  @Input() section: any;
}
