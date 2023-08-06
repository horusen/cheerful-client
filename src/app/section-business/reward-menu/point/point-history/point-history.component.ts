import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component';
import { PointHistory } from '../point-history.model';
import { PointHistoryService } from '../point-history.service';
import { AuthService } from 'src/app/auth/auth.service';
import { TypeUserEnum } from 'src/app/users/type-users/type-user.enum';

@Component({
  selector: 'app-point-history',
  templateUrl: './point-history.component.html',
  styleUrls: ['./point-history.component.scss'],
})
export class PointHistoryComponent
  extends BaseComponent<PointHistory>
  implements OnInit
{
  constructor(
    public pointService: PointHistoryService,
    public authService: AuthService
  ) {
    super();
  }

  ngOnInit() {
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
