import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-reward-menu',
  templateUrl: './reward-menu.component.html',
  styleUrls: ['./reward-menu.component.scss'],
})
export class RewardMenuComponent {
  constructor(public authService: AuthService) {}
}
