import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component';
import { PointHistory } from '../point-history.model';
import { PointHistoryService } from '../point-history.service';

@Component({
  selector: 'app-point-history',
  templateUrl: './point-history.component.html',
  styleUrls: ['./point-history.component.scss'],
})
export class PointHistoryComponent extends BaseComponent<PointHistory> {
  constructor(public pointService: PointHistoryService) {
    super();
  }
}
