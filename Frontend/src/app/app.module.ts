import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { authInterceptorProviders } from './service/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './service/admin.guard';
import { UserGuard } from './service/user.guard';
 import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
 import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
 import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizesComponent } from './pages/admin/view-quizes/view-quizes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SidebarComponent as UserSidebar } from './pages/user/sidebar/sidebar.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const routes:Routes=[
 
  {
    path:'',
    component:HomeComponent,
  
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  
  },
  {
    path:'register',
    component:SignupComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
   
     canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'categories',
        component:ViewCategoriesComponent
      }
      ,
      {
        path:'add-category',
        component:AddCategoryComponent
      } ,
      {
        path:'quizzes',
        component:ViewQuizesComponent
      },
      {
        path:'add-quiz',
        component:AddQuizComponent
      },
      {
        path:'quiz/:qid',
        component:UpdateQuizComponent
      },
      {
        path:'view-questions/:qid/:title',
        component:ViewQuestionsComponent
      },
      {
        path:'add-question/:qid/:title',
        component:AddQuestionComponent
      }
    ]

  }
  ,
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    
    canActivate:[UserGuard],
    children:[
      {
      path:':catId',
      component:LoadQuizComponent
    },
    {
      path:'instruction/:qid',
      component:InstructionsComponent
    } 
  ]
  },
  {
    path:'start/:qid',
    component:StartComponent,
    canActivate:[UserGuard],
  }

]
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavBarComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    UserSidebar,
 
    AddCategoryComponent,
      ViewQuizesComponent,
      AddQuizComponent,
      UpdateQuizComponent,
      ViewQuestionsComponent,
      AddQuestionComponent,
      LoadQuizComponent,
      InstructionsComponent,
      StartComponent
  ],
  imports: [
   
  BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    CKEditorModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule
  ],
  exports:[RouterModule],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
