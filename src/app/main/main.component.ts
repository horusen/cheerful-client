import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { TypeUserEnum } from '../users/type-users/type-user.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void {
    const isRootUrl = this.router.url === '/';
    const isAdminUser =
      this.authService.typeUser === TypeUserEnum.BusinessAdmin;
    const isIndividualUser =
      this.authService.typeUser === TypeUserEnum.Individual;

    if (isRootUrl) {
      if (isAdminUser) {
        this.router.navigate(['/business']);
      } else if (isIndividualUser) {
        this.router.navigate(['/personal']);
      }
    }
  }
}
