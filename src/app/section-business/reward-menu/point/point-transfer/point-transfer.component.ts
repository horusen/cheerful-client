import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component';
import { PointTransfer } from './point-transfer.model';

@Component({
  selector: 'app-point-transfer',
  templateUrl: './point-transfer.component.html',
  styleUrls: ['./point-transfer.component.scss'],
})
export class PointTransferComponent extends BaseComponent<PointTransfer> {
  constructor() {
    super();
  }
}
