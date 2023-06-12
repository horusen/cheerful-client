import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  loading: boolean = false;
  constructor(
    public cartService: CartService,
    public route: ActivatedRoute,
    public router: Router,
    public authService: AuthService
  ) {}

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
}
