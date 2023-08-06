import { Component } from '@angular/core';
import { BaseListComponent } from 'src/app/shared/base-component';
import { Connection } from '../../connection.mode';
import { ConnectionService } from '../../connection.service';
import { AuthService } from 'src/app/auth/auth.service';
import { TypeUserEnum } from 'src/app/users/type-users/type-user.enum';
import { ConnectionTypeEnum } from '../../connection-type/connection-type.enum';

@Component({
  selector: 'app-connection-individual-list',
  templateUrl: './connection-individual-list.component.html',
  styleUrls: ['./connection-individual-list.component.scss'],
})
export class ConnectionIndividualListComponent extends BaseListComponent<Connection> {
  selectedConnections: Connection[] = [];

  constructor(
    public connectionService: ConnectionService,
    public authService: AuthService
  ) {
    super(connectionService);
  }

  override ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.loading = true;

    const userId =
      this.authService.typeUser === TypeUserEnum.BusinessAdmin
        ? this.authService.business.id!
        : this.authService.user.id!;

    const connectionType =
      this.authService.typeUser === TypeUserEnum.BusinessAdmin
        ? ConnectionTypeEnum.BusinessToUser
        : ConnectionTypeEnum.UserToUser;

    this.connectionService
      .getConnection(userId, connectionType)
      .subscribe(() => {
        this.loading = false;
      });
  }

  toggleSelection(connection: Connection) {
    if (this.isSelected(connection)) {
      this.deselectConnection(connection);
    } else {
      this.selectConnection(connection);
    }
  }

  selectConnection(connection: Connection) {
    this.selectedConnections.push(connection);
  }

  deselectConnection(connection: Connection) {
    this.selectedConnections = this.selectedConnections.filter(
      (c) => c.id !== connection.id
    );
  }

  isSelected(connection: Connection) {
    return this.selectedConnections.some((c) => c.id === connection.id);
  }
}
