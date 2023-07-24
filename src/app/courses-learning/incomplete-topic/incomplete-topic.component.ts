import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-incomplete-topic',
  templateUrl: './incomplete-topic.component.html',
  styleUrls: ['./incomplete-topic.component.css']
})
export class IncompleteTopicComponent {
  @Input() section: any;
}
