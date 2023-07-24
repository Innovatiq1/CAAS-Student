import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncompleteTopicComponent } from './incomplete-topic.component';

describe('IncompleteTopicComponent', () => {
  let component: IncompleteTopicComponent;
  let fixture: ComponentFixture<IncompleteTopicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncompleteTopicComponent]
    });
    fixture = TestBed.createComponent(IncompleteTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
