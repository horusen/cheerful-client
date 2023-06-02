import { Component, OnInit } from '@angular/core';
import {
  BaseComponent,
  BaseListComponent,
} from 'src/app/shared/base-component';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-profile-items',
  templateUrl: './profile-items.component.html',
  styleUrls: ['./profile-items.component.scss'],
})
export class ProfileItemsComponent
  extends BaseComponent<any>
  implements OnInit
{
  constructor(public cardService: CardsService) {
    super();
  }

  ngOnInit(): void {
    this.data = this.cardService.data;
  }
}
