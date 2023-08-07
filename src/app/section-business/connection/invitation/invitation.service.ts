import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { Invitation } from './invitation.model';
import { map, tap } from 'rxjs';
import { ApiResponse } from 'src/app/shared/models/ApiResponse';
import { InvitationStatusEnum } from './invitation-status/invitation-status.enum';

@Injectable({
  providedIn: 'root',
})
export class InvitationService extends BaseService<Invitation> {
  constructor() {
    super('invitation');
  }

  getByReceiverId(id: number) {
    return this.factory.get(`${this.endPoint}/receiver/${id}`).pipe(
      tap((response: ApiResponse<Invitation>) => {
        this.data = response.data;

        this.paginationInfo = {
          total: response.total,
          itemsPerPage: response.per_page,
          currentPage: response.current_page,
        };
      }),
      map((response: ApiResponse<Invitation>) => response.data)
    );
  }

  getBySender(
    id: number,
    typeSender: 'user' | 'business',
    status: InvitationStatusEnum
  ) {
    console.log(status);

    return this.factory
      .get(`${this.endPoint}/sender/${typeSender}/${id}`, {
        params: { status },
      })
      .pipe(
        tap((response: ApiResponse<Invitation>) => {
          this.data = response.data;

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map((response: ApiResponse<Invitation>) => response.data)
      );
  }

  acceptInvitation(invitationId: number) {
    return this._updateStatus(invitationId, 'accepted');
  }

  abortInvitation(invitationId: number) {
    return this._updateStatus(invitationId, 'aborted');
  }

  private _updateStatus(invitationId: number, status: 'accepted' | 'aborted') {
    return this.factory.patch(
      `${this.endPoint}/${invitationId}/status/${status}`,
      {}
    );
  }
}
