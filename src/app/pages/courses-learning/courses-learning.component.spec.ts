import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesLearningComponent } from './courses-learning.component';

describe('CoursesLearningComponent', () => {
  let component: CoursesLearningComponent;
  let fixture: ComponentFixture<CoursesLearningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesLearningComponent]
    });
    fixture = TestBed.createComponent(CoursesLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
