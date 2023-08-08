import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-section-individual-header',
  templateUrl: './section-individual-header.component.html',
  styleUrls: ['./section-individual-header.component.scss'],
})
export class SectionIndividualHeaderComponent {
  constructor(public authService: AuthService) {}
}
