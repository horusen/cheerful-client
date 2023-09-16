import { Component } from '@angular/core';
import { BaseCreateComponent } from '../../shared/base-component';
import { Otp } from './otp.model';
import { AuthService } from '../auth.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent extends BaseCreateComponent<Otp> {
  constructor(public authService: AuthService) {
    super(authService);
  }

  ngOnInit() {
    this.form = this.fb.group({
      code: [null, Validators.required],
      userId: [this.authService.user.id, Validators.required],
    });
  }

  verify() {
    if (this.form.invalid) {
      this.helper.notification.alertDanger('Invalid Form');
      return;
    }

    this.loading = true;
    this.authService.verifyOtp(this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.helper.notification.alertSuccess();
        this.router.navigate(['']);
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  resendOtp() {
    this.loading = true;
    this.authService.resendOtp(this.authService.user.id!).subscribe({
      next: () => {
        this.loading = false;
        this.helper.notification.alertSuccess();
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
