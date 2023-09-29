import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-section-merchant-header',
  templateUrl: './section-merchant-header.component.html',
  styleUrls: ['./section-merchant-header.component.scss'],
})
export class SectionMerchantHeaderComponent {
  constructor(public authService: AuthService) {}
}
