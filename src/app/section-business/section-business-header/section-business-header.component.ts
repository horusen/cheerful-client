import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/users/users.model';
import { Business } from '../business/business.model';
import { BaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-section-business-header',
  templateUrl: './section-business-header.component.html',
  styleUrls: ['./section-business-header.component.scss'],
})
export class SectionBusinessHeaderComponent
  extends BaseComponent<any>
  implements OnInit
{
  constructor(public authService: AuthService) {
    super();
  }

  ngOnInit(): void {}
}
