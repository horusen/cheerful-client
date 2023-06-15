import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from './cart.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { BaseComponent } from '../shared/base-component';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent extends BaseComponent<any> implements OnInit {
  giftFinderModal: NgbModalRef | null = null;
  constructor(
    public cartService: CartService,
    public route: ActivatedRoute,
    public router: Router,
    public authService: AuthService
  ) {
    super();
  }

  ngOnInit(): void {
    // Watch when the url changes
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 500);
      });
  }

  override openModal(
    content: any,
    size?: 'sm' | 'lg' | 'xl',
    centered?: boolean,
    scrollable?: boolean
  ): NgbModalRef {
    this.giftFinderModal = super.openModal(content, size, centered, scrollable);
    return this.giftFinderModal;
  }

  closeModal() {
    if (this.giftFinderModal) {
      this.giftFinderModal.close();
    }
  }
}
