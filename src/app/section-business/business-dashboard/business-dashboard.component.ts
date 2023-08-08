import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-business-dashboard',
  templateUrl: './business-dashboard.component.html',
  styleUrls: ['./business-dashboard.component.scss'],
})
export class BusinessDashboardComponent {
  constructor(public authService: AuthService) {}
}
