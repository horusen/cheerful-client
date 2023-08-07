import { ConnectionTypeEnum } from './../../connection-type/connection-type.enum';
import { ConnectionType } from './../../connection-type/connection-type.model';
import { Component } from '@angular/core';
import { BaseListComponent } from 'src/app/shared/base-component';
import { Invitation } from '../invitation.model';
import { InvitationService } from '../invitation.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { InvitationStatusEnum } from '../invitation-status/invitation-status.enum';

@Component({
  selector: 'app-invitation-list',
  templateUrl: './invitation-list.component.html',
  styleUrls: ['./invitation-list.component.scss'],
})
export class InvitationListComponent extends BaseListComponent<Invitation> {
  public typeInvitation: 'received' | 'pending' | 'accepted' | null = null;

  get ConnectionTypeEnum() {
    return ConnectionTypeEnum;
  }

  constructor(
    public invitationService: InvitationService,
    public route: ActivatedRoute,
    public authService: AuthService
  ) {
    super(invitationService);
  }

  override ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const type = params['type'];

      if (!['received', 'pending', 'accepted'].includes(type)) {
        this.router.navigate(['./'], {
          relativeTo: this.route,
          queryParams: { type: 'pending' },
        });
        return;
      }

      this.typeInvitation = type;

      this.getData(type);
    });
  }

  getData(type: 'pending' | 'received' | 'accepted') {
    this.loading = true;

    const handleData = (data: Invitation[]) => {
      this.data = data;
      this.loading = false;
    };

    const receiverId = this.authService.user.id!;
    const senderId = this.authService.business.id!;

    if (type === 'received') {
      this.invitationService.getByReceiverId(receiverId).subscribe(handleData);
    } else {
      const invitationStatus =
        type === 'pending'
          ? InvitationStatusEnum.Pending
          : InvitationStatusEnum.Accepted;
      this.invitationService
        .getBySender(senderId, 'business', invitationStatus)
        .subscribe(handleData);
    }
  }
}
