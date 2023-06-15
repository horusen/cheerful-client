import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/base-component';
import { Store } from 'src/app/store/store.model';
import { StoreService } from 'src/app/store/store.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent extends BaseComponent<Store> {
  title = 'explore';
  constructor(public storeService: StoreService, public router: Router) {
    super(storeService);
  }

  ngOnInit(): void {
    // Subscribe to url
    this.router.events.subscribe((val) => {
      if (this.router.url.includes('gift-finder-results')) {
        this.title = 'gift-finder-results';
      } else {
        this.title = 'explore';
      }
    });
    this.storeService.get().subscribe((data) => {
      this.data = data;
    });
  }
}
