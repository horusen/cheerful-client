import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from 'src/app/shared/base-component';
import { PointTransfer } from '../point-transfer.model';
import { PointTransferService } from '../point-transfer.service';
import { AuthService } from 'src/app/auth/auth.service';
import { TypeUserEnum } from 'src/app/users/type-users/type-user.enum';
import { EntityTypeEnum } from 'src/app/common/entity-type/entity-type.enum';

@Component({
  selector: 'app-point-transfer-list',
  templateUrl: './point-transfer-list.component.html',
  styleUrls: ['./point-transfer-list.component.scss'],
})
export class PointTransferListComponent
  extends BaseListComponent<PointTransfer>
  implements OnInit
{
  get EntityTypeEnum() {
    return EntityTypeEnum;
  }
  constructor(
    public pointService: PointTransferService,
    public authService: AuthService
  ) {
    super(pointService);
  }
  override ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;

    if (this.authService.typeUser == TypeUserEnum.BusinessAdmin) {
      this.pointService.getByBusiness().subscribe(() => {
        this.loading = false;
      });
    } else {
      this.pointService.getByUser().subscribe(() => {
        this.loading = false;
      });
    }
  }
}
