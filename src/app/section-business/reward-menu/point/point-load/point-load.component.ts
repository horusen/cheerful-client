import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component';
import { PointLoad } from './point-load.model';

@Component({
  selector: 'app-point-load',
  templateUrl: './point-load.component.html',
  styleUrls: ['./point-load.component.scss'],
})
export class PointLoadComponent extends BaseComponent<PointLoad> {
  constructor() {
    super();
  }
}
