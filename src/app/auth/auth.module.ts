import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input-gg';
import { JoinComponent } from './join/join.component';
import { AuthComponent } from './auth.component';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'join',
        component: JoinComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '',
        redirectTo: 'signup',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    JoinComponent,
    AuthComponent,
    OtpComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgxIntlTelInputModule,
  ],
})
export class AuthModule {}
