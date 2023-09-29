import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { TypeUserEnum } from '../users/type-users/type-user.enum';

@Component({
  selector: 'app-section-business',
  templateUrl: './section-business.component.html',
  styleUrls: ['./section-business.component.scss'],
})
export class SectionBusinessComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void {
    if (
      this.authService.typeUser != TypeUserEnum.BusinessAdmin ||
      !this.authService.business
    ) {
      this.authService.logout();
    }
  }
}
