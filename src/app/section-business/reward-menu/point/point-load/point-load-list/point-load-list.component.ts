import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component';
import { AuthService } from 'src/app/auth/auth.service';
import { TypeUserEnum } from 'src/app/users/type-users/type-user.enum';
import { PointLoad } from '../point-load.model';
import { PointLoadService } from '../point-load.service';

@Component({
  selector: 'app-point-load-list',
  templateUrl: './point-load-list.component.html',
  styleUrls: ['./point-load-list.component.scss'],
})
export class PointLoadListComponent
  extends BaseComponent<PointLoad>
  implements OnInit
{
  constructor(
    public pointLoadService: PointLoadService,
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
      this.pointLoadService.getByBusiness().subscribe(() => {
        this.loading = false;
      });
    } else {
      this.pointLoadService.getByUser().subscribe(() => {
        this.loading = false;
      });
    }
  }
}
