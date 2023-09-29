import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PointTransfer } from '../../point/point-transfer/point-transfer.model';
import { PointTransferService } from '../../point/point-transfer/point-transfer.service';
import { BaseCreateComponent } from 'src/app/shared/base-component';
import { AuthService } from 'src/app/auth/auth.service';
import { TypeUserEnum } from 'src/app/users/type-users/type-user.enum';
import { TypeEntityEnum } from '../../point/type-entity.enum';
import { Validators } from '@angular/forms';
import { ConnectionService } from 'src/app/section-business/connection/connection.service';
import { Connection } from 'src/app/section-business/connection/connection.mode';

@Component({
  selector: 'app-transfer-points',
  templateUrl: './transfer-points.component.html',
  styleUrls: ['./transfer-points.component.scss'],
})
export class TransferPointsComponent
  extends BaseCreateComponent<PointTransfer>
  implements OnInit
{
  searchName$ = new Subject<string>();
  resetData$ = new Subject<true>();
  public isMessageCollapsed = true;
  constructor(
    public pointTransferService: PointTransferService,
    public connectionService: ConnectionService,
    public authService: AuthService
  ) {
    super(pointTransferService);
  }

  ngOnInit() {
    this.initForm();
  }

  updateReceivers(connections: Connection[]) {
    const isSenderBusiness =
      this.authService.typeUser === TypeUserEnum.BusinessAdmin;
    const isSenderUser = this.authService.typeUser === TypeUserEnum.Individual;
    const receiverIds: number[] = [];

    if (isSenderBusiness) {
      receiverIds.push(...connections.map((item) => item.user1?.id!));
    } else if (isSenderUser) {
      connections.forEach((item) => {
        const receiverId =
          item.user1 === this.authService.user
            ? item.user2?.id!
            : item.user1?.id!;
        receiverIds.push(receiverId);
      });
    }

    this.formValuePatcher('receiver_ids', receiverIds);
  }

  searchConnection(event: any) {
    this.searchName$.next(event.target.value || '');
  }

  initForm() {
    const isBusinessAdmin =
      this.authService.typeUser == TypeUserEnum.BusinessAdmin;

    const typeEntityId = isBusinessAdmin
      ? TypeEntityEnum.Business
      : TypeEntityEnum.User;

    const entityUserId = isBusinessAdmin ? null : this.authService.user.id;

    const entityBusinessId = isBusinessAdmin
      ? this.authService.business.id
      : null;

    this.form = this.fb.group({
      sender_entity_type_id: [typeEntityId, [Validators.required]],
      amount: [null, { validators: [Validators.required] }],
      sender_user_id: [entityUserId],
      sender_business_id: [entityBusinessId],
      message: [null],
      receiver_ids: [[], Validators.required],
    });

    this.form.controls['amount'].valueChanges.subscribe((value) => {
      if (value < 1) {
        this.form.controls['amount'].setErrors({ invalid: true });
      }
    });
  }
  override create() {
    if (this.form.invalid) {
      this.logInvalidFields(this.form);
      return;
    }

    this.loading = true;
    this.pointTransferService
      .store(this.helper.object.omitNullValue(this.form.value))
      .subscribe(() => {
        this.loading = false;
        this.initForm();
        this.helper.notification.alertSuccess('Information added successfully');
        this.created.emit();
        this.resetData$.next(true);
      });
  }
}
