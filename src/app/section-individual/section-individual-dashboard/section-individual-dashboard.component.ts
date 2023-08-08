import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-section-individual-dashboard',
  templateUrl: './section-individual-dashboard.component.html',
  styleUrls: ['./section-individual-dashboard.component.scss'],
})
export class SectionIndividualDashboardComponent {
  constructor(public authService: AuthService) {}
}
