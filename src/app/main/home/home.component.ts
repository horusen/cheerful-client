import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component';
import { StoreService } from 'src/app/store/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent<any> implements OnInit {
  constructor(public storeService: StoreService) {
    super();
  }

  ngOnInit(): void {
    this.loading = true;
    this.subscriptions['stores'] = this.storeService
      .get({ emitData: false })
      .subscribe((data) => {
        console.log(data);
        this.data = data.slice(0, 4);
        this.loading = false;
      });
  }
}
