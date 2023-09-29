import { tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services';
import { Connection } from './connection.mode';
import { ApiResponse } from 'src/app/shared/models/ApiResponse';
import { ConnectionTypeEnum } from './connection-type/connection-type.enum';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService extends BaseService<Connection> {
  constructor() {
    super('connection');
  }

  getConnection(id: number, typeConnection: ConnectionTypeEnum) {
    const connectionType =
      typeConnection === ConnectionTypeEnum.BusinessToUser
        ? 'business'
        : 'user';
    return this.factory.get(`${this.endPoint}/${connectionType}/${id}`).pipe(
      tap((response: ApiResponse<Connection>) => {
        this.data = response.data;

        this.paginationInfo = {
          total: response.total,
          itemsPerPage: response.per_page,
          currentPage: response.current_page,
        };
      }),
      map((response: ApiResponse<Connection>) => response.data)
    );
  }
}
