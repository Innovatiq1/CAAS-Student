import { Component, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-courses-learning',
  templateUrl: './courses-learning.component.html',
  styleUrls: ['./courses-learning.component.css']
})
export class CoursesLearningComponent {
  sections = [{title: "Introduction",  number: 1, lectures: 2, time: 15}
  ]
  incompletesections = [{title:"Air Transport Safety & Security Part 2", number: 3, lectures: 1, time: 45, 
items:[{type: "video", title:"Air Transport Safety & Security Part 2", time: 45}]},
{title: "Terrorism & Its Impact", number: 4, lectures: 1, time: 10, items:[{type: "video", title:"Terrorism & its Impact", time: 10}]},
{title: "Grooming and Regulations", number: 5, lectures: 3, time: 45, items: [{type: "reading",
title: "Coporate Grooming", time: 10}, {type:"video", title: "Grooming", time: 25}, {type: "Reading",
title: "Ramp Rules and Regulations", time: 10}]},
{title: "Aviation law and Insurance", number: 6, lectures: 2, time: 5, items:[{type: "video", title: "Aviation law", time: 5}, {type:"reading", title:"Aviation law & insurance", time: 5}]},
{title: "Effective Communication Skills", number: 7, lectures: 1, time: 5, items:[{type:"reading", title: "Effective communication skills", time: 5}]},
{title: "Understanding Body Language", number: 8, lectures: 1, time: 10, items:[{type: "reading", title: "Understanding Body Language", time: 10}]},
{title: "Interview Skills", number: 9, lectures: 1, time: 10, items:[{type: "reading", title: "Understanding Body Language", time: 10}]},
{title: "Customer Relationship Management - CRM", number: 10, lectures: 1, time: 10, items:[{type: "reading", title: "Understanding Body Language", time: 10}]},
{title: "Next Steps", number: 11, lectures: 0, time: 40, items: [{type:"reading", title: "Practice Test 1", time: 10}, {type: "reading", title:"Practice Test 2", time: 30}] }]

collapsed = false;
  courseKits: any;
  subscribeParams: Params;
  courseId!: string;
  courseDetails: any;


collapse() {
  this.collapsed = !this.collapsed;
}
constructor(    
  private commonService: CommonService,
  private activatedRoute: ActivatedRoute
  ){
    this.subscribeParams = this.activatedRoute.params.subscribe((params) => {
      this.courseId = params["id"];
    });
this.getCourseKits();

  }
getCourseKits(): void {
  this.commonService.getCourseById(this.courseId).subscribe((res:any) => {
    this.courseKits = res?.course_kit;
    this.courseDetails = res;
  },
    (error:any) => {
      console.error('Error fetching course kits:', error);
    }
  );
}


}
