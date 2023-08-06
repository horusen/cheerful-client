import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component';
import { PointHistory } from './point-history.model';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss'],
})
export class PointComponent extends BaseComponent<PointHistory> {
  constructor() {
    super();
  }
}
