import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';


const appRoutes: Routes  = [
  {
    path: 'users',
    pathMatch: 'prefix',
    children: [
      {
        path: ':name',
        component: UserComponent
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthguardGuard],
    pathMatch: 'full'// nu de la asta era eroarea(((
  },
  {
    path: '',
    component: LoginFormComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotfoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent,
    UserComponent,
    NotfoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
