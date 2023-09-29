import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendInvitationComponent } from './send-invitation/send-invitation.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SendInvitationComponent],
  imports: [CommonModule, SharedModule],
  exports: [SendInvitationComponent],
})
export class SharedConnectionModule {}
