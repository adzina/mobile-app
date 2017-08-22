import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler,NavController } from 'ionic-angular';
import {DatePicker} from '@ionic-native/date-picker';
import { MyApp } from './app.component';

import {SidePanelLessonsComponent} from '../pages/side-panel-lessons/side-panel-lessons.component';
import { LoginComponent } from '../pages/login/view-login.component';
import { RegisterComponent} from '../pages/register/view-register.component';
import {ChooseModeComponent} from '../pages/choose-mode/view-choose-mode.component';
import {DashboardComponent} from '../pages/dashboard/view-dashboard.component';
import {TeacherDashboardComponent} from '../pages/teacher-dashboard/view-teacher-dashboard.component';
import {TeacherAddStudentsComponent} from '../pages/teacher-add-students/view-teacher-add-students.component';
import {TeacherWordsPanelComponent} from '../pages/teacher-words-panel/view-teacher-words-panel.component';
import {ProgressComponent} from '../pages/progress/view-progress.component';
import {GoodbyeComponent} from '../pages/goodbye/view-goodbye.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {LoginService} from '../services/login.service';
import {UserService} from '../services/user.service';

@NgModule({
  declarations: [
    MyApp,
    SidePanelLessonsComponent,
    LoginComponent,
    RegisterComponent,
    ChooseModeComponent,
    ProgressComponent,
    DashboardComponent,
    TeacherDashboardComponent,
    TeacherAddStudentsComponent,
    TeacherWordsPanelComponent,
    GoodbyeComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SidePanelLessonsComponent,
    LoginComponent,
    RegisterComponent,
    ChooseModeComponent,
    ProgressComponent,
    DashboardComponent,
    TeacherDashboardComponent,
    TeacherAddStudentsComponent,
    TeacherWordsPanelComponent,
    GoodbyeComponent
  ],
  providers: [
    DatePicker,
    StatusBar,
    SplashScreen,
    LoginService,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}