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
    if (this.authService.typeUser === TypeUserEnum.BusinessAdmin) {
      this.router.navigate(['/business']);
    } else if (this.authService.typeUser === TypeUserEnum.Individual) {
      this.router.navigate(['/personal']);
    }
  }
}
