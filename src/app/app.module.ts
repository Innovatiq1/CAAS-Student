import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    CoursesLearningComponent,
    HeaderComponent,
    CompletedTopicComponent,
    IncompleteTopicComponent,
    SidebarComponent,
    TabComponent,
    SubTabComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
