import { Component, Type } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from 'src/app/helpers/storage/storage';
import { BaseComponent } from 'src/app/shared/base-component';
import { AuthService } from '../auth.service';
import { TypeUserEnum } from 'src/app/users/type-users/type-user.enum';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
})
export class JoinComponent extends BaseComponent<any> {
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public storage: Storage,
    public authService: AuthService
  ) {
    super();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      // TODO: Decrypt the URL coming from the backend

      const { invitation, name, email } = params;

      this.storage.set('temp_user_info', {
        invitation_id: invitation,
        name: name.replace('+', ' '),
        email,
      });

      this.authService.registrationUserType = TypeUserEnum.Individual;

      this.router.navigate(['/authentication/signup']);

      // const decryptedParams = JSON.parse(decryptedBytes.toString(enc.Utf8));
    });
  }
}
