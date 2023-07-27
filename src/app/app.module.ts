import { CUSTOM_ELEMENTS_SCHEMA, NgModule, RendererFactory2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SubTabComponent } from './components/sidebar/tab/sub-tab/sub-tab.component';
import { TabComponent } from './components/sidebar/tab/tab.component';
import { HeaderComponent } from './common/header/header.component';
import { CompletedTopicComponent } from './pages/courses-learning/completed-topic/completed-topic.component';
import { CoursesLearningComponent } from './pages/courses-learning/courses-learning.component';
import { IncompleteTopicComponent } from './pages/courses-learning/incomplete-topic/incomplete-topic.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './core/services/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ApiIntereptor } from './core/interceptors/api.interceptor';
import { ErrorHandlerInterceptor } from './core/interceptors/error-handler.interceptor';
import { VideoPlayerComponent } from './pages/video-player/video-player.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

// import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    CoursesLearningComponent,
    HeaderComponent,
    CompletedTopicComponent,
    IncompleteTopicComponent,
    SidebarComponent,
    TabComponent,
    SubTabComponent,
    LoginComponent,
    DashboardComponent,
    VideoPlayerComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule,


    // CarouselModule,
    ToastrModule.forRoot({ maxOpened: 1, timeOut: 1200,preventDuplicates:true,
  }),

  ],
  providers: [AuthService,BsModalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiIntereptor,
      multi: true,

    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add the CUSTOM_ELEMENTS_SCHEMA here

})
export class AppModule { }
