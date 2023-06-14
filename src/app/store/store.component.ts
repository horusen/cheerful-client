import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { BaseComponent } from '../shared/base-component';
import { Store } from './store.model';
import { Router } from '@angular/router';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent extends BaseComponent<Store> {
  store: Store;
  constructor(
    public authService: AuthService,
    public router: Router,
    public storeService: StoreService
  ) {
    super();
    this.store = this.authService.shop;
    if (!this.store) {
      this.helper.notification.alertDanger('Please register your store first!');
      this.router.navigate(['/']);
    }
    this.storeService.singleData = this.store;
  }

  ngOnInit(): void {
    this.authService.store$.subscribe((shop: Store) => {
      this.store = shop;
      this.storeService.singleData = this.store;
    });
  }
}
