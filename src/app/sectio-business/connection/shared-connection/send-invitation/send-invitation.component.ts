import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Invitation } from 'src/app/section-business/connection/invitation/invitation.model';
import { InvitationService } from 'src/app/section-business/connection/invitation/invitation.service';
import { BaseCreateComponent } from 'src/app/shared/base-component';
import { ConnectionTypeEnum } from 'src/app/section-business/connection/connection-type/connection-type.enum';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-send-invitation',
  templateUrl: './send-invitation.component.html',
  styleUrls: ['./send-invitation.component.scss'],
})
export class SendInvitationComponent
  extends BaseCreateComponent<Invitation>
  implements OnInit
{
  constructor(
    public invitationService: InvitationService,
    public authService: AuthService
  ) {
    super(invitationService);
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      connection_type_id: [
        ConnectionTypeEnum.BusinessToUser,
        Validators.required,
      ],
      sender_user_id: [''],
      sender_business_id: [''],
      receiver_email_address: ['', Validators.required],
      receiver_name: ['', Validators.required],
    });

    if (
      this.form.controls['connection_type_id'].value ==
      ConnectionTypeEnum.UserToUser
    ) {
      const sender_id = this.authService.user.id;
      this.form.controls['sender_user_id'].patchValue(sender_id);
    } else if (
      this.form.controls['connection_type_id'].value ==
      ConnectionTypeEnum.BusinessToUser
    ) {
      const sender_id = this.authService.business.id;
      this.form.controls['sender_business_id'].patchValue(sender_id);
    }
  }

  override create() {
    if (this.form.invalid) {
      this.logInvalidFields(this.form);
      return;
    }

    this.loading = true;
    this.invitationService
      .store(this.helper.object.omitNullValue(this.form.value))
      .subscribe(() => {
        this.loading = false;
        this.initForm();
        this.helper.notification.alertSuccess('Information added successfully');
        this.created.emit();
      });
  }
}
