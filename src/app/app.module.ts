import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesLearningComponent } from './courses-learning/courses-learning.component';
import { HeaderComponent } from './header/header.component';
import { CompletedTopicComponent } from './courses-learning/completed-topic/completed-topic.component';
import { IncompleteTopicComponent } from './courses-learning/incomplete-topic/incomplete-topic.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabComponent } from './sidebar/tab/tab.component';
import { SubTabComponent } from './sidebar/tab/sub-tab/sub-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesLearningComponent,
    HeaderComponent,
    CompletedTopicComponent,
    IncompleteTopicComponent,
    SidebarComponent,
    TabComponent,
    SubTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
