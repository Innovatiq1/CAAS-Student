import { ChangeDetectorRef, Component ,  TemplateRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  projectDialog: any;
  includeInProject: any = [];
  userProjectInclude: any = [];
  includeInProjectMember: boolean = false;
  includeInJoinProject: boolean = false;
  @ViewChild("addDialog") viewAddDialogRef!: TemplateRef<any>;
  pendingProjects: any = [];
  userid: any;
  constructor(    
    private projectService: ProjectService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private authService:AuthService
    ){
      const loggedInInfo = this.authService.getUserInfo();
      this.userid = loggedInInfo?.user._id;  
      this.getAllProjectInPending();
  

  }
  getAllProjectInPending() {
    this.pendingProjects = [];
    const payload = { studentId: this.userid, status: 'registered,approved,withdraw' };
    this.projectService.courseDashboard(payload).subscribe((response: any) => {
      this.pendingProjects = response.data.docs;
      this.cdr.detectChanges();
    })
  }
  openModalWithClass( project:any, projectlink: boolean, inProgressProject: boolean = false) {
    this.includeInProject = [];
    this.userProjectInclude = [];
    this.projectDialog = project;

    this.navToProjectDetail(project?._id);
    return;
  }
  navToProjectDetail(projectId: any) {
    const link = `course/${projectId}`;
    this.router.navigateByUrl(link);
  }




}
