import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-tab',
  templateUrl: './sub-tab.component.html',
  styleUrls: ['./sub-tab.component.css']
})
export class SubTabComponent {
  @Input() sub: any;
  @Input() tab: any;

  select() {
    for(let s of this.tab.subs) {
      s.type = "none";
    }
    this.sub.type = "selected";
  }
}
