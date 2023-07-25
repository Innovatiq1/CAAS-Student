import { Component } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('slide', [
      state('true', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      state('false', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      transition('true => false', animate('400ms ease-in-out')),
      transition('false => true', animate('400ms ease-in-out'))
    ]),
  ]
})
export class SidebarComponent {
  tabs = [{title: "Home", iconsrc: "/assets/home-icon.svg", selected: false, subs: []},
{title: "Course", iconsrc: "/assets/course-icon.svg", selected: true, subs: [{title: "List", type: "selected"}, {title: "Add", type: "none"}, {title: "Course Kit", type: "none"}, {title: "Categories", type: "none"}]},
{title: "Schedule Class", iconsrc: "/assets/schedule-icon.svg", selected: false, subs: [{title:"List", type: "none"}, {title:"Add", type:"none"}, {title:"Approve List", type: "none"}, {title:"Completion List", type:"none"}]},
{title: "Fellowship", iconsrc:"/assets/fellowship-icon.svg", selected: false, subs: []}, {title: "Survey", iconsrc:"/assets/survey-icon.svg", selected: false, subs: [{title: "List", type:"none"}]},
{title: "Audit", selected: false, iconsrc: "/assets/audit-icon.svg", subs: [{title: "List", type:"none"}, {title: "E-Attendance", type:"none"}]}, {title: "Home Content", iconsrc: "/assets/home-content-icon.svg", selected: false, subs: []},
{title: "Users", selected: false, iconsrc: "/assets/users-icon.svg", subs: [{title: "Type", type: "none"}, {title: "All User", type: "none"}]},
{title: "Survey Builder", selected: false, iconsrc: "/assets/survey-builder-icon.svg", src: [{title: "Surveys", type: "none"}, {title: "Add", type: "none"}]},
{title: "Certificate Builder", selected: false, iconsrc: "/assets/certificate-icon.svg", subs: [{title: "Certificates", type: "none"}, {title: "Add", type: "none"}]},
{title: "Email Configuration", selected: false, iconsrc:"/assets/email-icon.svg", subs: []},
{title: "Banners", selected: false, iconsrc: "/assets/banner-icon.svg", subs: []},
{title: "Trainer", selected: false, iconsrc: "/assets/trainer-icon.svg", subs: []},
{title: "Resources", selected: false, iconsrc: "/assets/resource-icon.svg", subs: []},
{title: "Newsletter", selected: false, iconsrc: "/assets/newsletter-icon.svg", subs: []},
{title: "Announcement", selected: false, iconsrc: "/assets/announcement-icon.svg", subs: []},
{title: "Testimonials", selected: false, iconsrc: "/assets/testimonials-icon.svg", subs: []},
{title: "Email Invite", selected: false, iconsrc: "/assets/email-invite-icon.svg", subs: []},
{title: "Dashboard", selected: false, iconsrc: "/assets/home-icon.svg", subs: []}]
 index = 0;
 collapsed = false;

 collapse() {
  this.collapsed = true;
 }

 expand() {
  this.collapsed = false;
 }

}
