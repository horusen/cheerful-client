import { Component, OnInit } from '@angular/core';
import { BaseCreateComponent } from 'src/app/shared/base-component';
import { AuthService } from 'src/app/auth/auth.service';
import { Validators } from '@angular/forms';
import { TypeUserEnum } from 'src/app/users/type-users/type-user.enum';
import { TypeEntityEnum } from '../../point/type-entity.enum';
import { environment } from 'src/environments/environment';
import { PointLoad } from '../../point/point-load/point-load.model';
import { PointLoadService } from '../../point/point-load/point-load.service';

@Component({
  selector: 'app-load-points',
  templateUrl: './load-points.component.html',
  styleUrls: ['./load-points.component.scss'],
})
export class LoadPointsComponent
  extends BaseCreateComponent<PointLoad>
  implements OnInit
{
  constructor(
    public pointLoadService: PointLoadService,
    public authService: AuthService
  ) {
    super(pointLoadService);
  }

  ngOnInit() {
    this.initForm();
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
      entity_type_id: [typeEntityId, [Validators.required]],
      amount: [0, { validators: [Validators.required] }],
      point_amount: [0, { validators: [Validators.required] }],
      entity_user_id: [entityUserId],
      entity_business_id: [entityBusinessId],
    });

    this.form.controls['amount'].valueChanges.subscribe((value) => {
      this.form.controls['point_amount'].patchValue(
        value * environment.moneyToPointRation,
        { emitEvent: false }
      );
    });

    this.form.controls['point_amount'].valueChanges.subscribe((value) => {
      this.form.controls['amount'].patchValue(
        value / environment.moneyToPointRation,
        { emitEvent: false }
      );
    });
  }
  override create() {
    if (this.form.invalid) {
      this.logInvalidFields(this.form);
      return;
    }

    const data = {
      ...this.form.value,
      point_amount: null,
    };

    this.loading = true;
    this.pointLoadService
      .store(this.helper.object.omitNullValue(data))
      .subscribe(() => {
        this.loading = false;
        this.initForm();
        this.helper.notification.alertSuccess('Information added successfully');
        this.created.emit();
      });
  }
}
