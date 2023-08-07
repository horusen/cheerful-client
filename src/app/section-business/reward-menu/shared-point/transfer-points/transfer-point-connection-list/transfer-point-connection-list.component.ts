import { Subject } from 'rxjs';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ConnectionTypeEnum } from 'src/app/section-business/connection/connection-type/connection-type.enum';
import { Connection } from 'src/app/section-business/connection/connection.mode';
import { ConnectionService } from 'src/app/section-business/connection/connection.service';
import { BaseListComponent } from 'src/app/shared/base-component';
import { TypeUserEnum } from 'src/app/users/type-users/type-user.enum';

@Component({
  selector: 'app-transfer-point-connection-list',
  templateUrl: './transfer-point-connection-list.component.html',
  styleUrls: ['./transfer-point-connection-list.component.scss'],
})
export class TransferPointConnectionListComponent extends BaseListComponent<Connection> {
  @Input() searchName$!: Subject<string>;
  @Input() resetData$!: Subject<true>;
  @Output() selectedDataEmitter = new EventEmitter<Connection[]>();
  temp_data: Connection[] = [];
  selectedConnections: Connection[] = [];

  constructor(
    public connectionService: ConnectionService,
    public authService: AuthService
  ) {
    super(connectionService);
  }

  override ngOnInit() {
    this.searchName$.subscribe((name) => {
      this.searchConnection(name);
    });

    this.resetData$.subscribe(() => {
      this.selectedConnections = [];
    });

    this.getConnections();
  }

  // TODO: Filter also by user2, business_id
  searchConnection(name: string) {
    if (name) {
      this.temp_data = this.data.filter((item) =>
        item.user1?.name.toLocaleLowerCase().includes(name.toLowerCase())
      );
      return;
    }

    this.temp_data = this.data;
  }

  selectConnection(connection: Connection) {
    this.selectedConnections.push(connection);
  }

  deselectConnection(connection: Connection) {
    this.selectedConnections = this.selectedConnections.filter(
      (item) => item.id !== connection.id
    );
  }

  toggleConnectionSelectionFromCheckbox(event: any) {
    let connectionId = parseInt(event?.target.value);
    const connection = this.data.find((item) => item.id === connectionId);
    this.toggleConnectionSelection(connection!);
  }

  toggleConnectionSelection(connection: Connection) {
    if (this.selectedConnections.includes(connection)) {
      this.deselectConnection(connection);
    } else {
      this.selectConnection(connection);
    }

    this.selectedDataEmitter.emit(this.selectedConnections);
  }

  getConnections() {
    this.loading = true;
    const id =
      this.authService.typeUser === TypeUserEnum.BusinessAdmin
        ? this.authService.business.id!
        : this.authService.user.id!;

    const connectionType =
      this.authService.typeUser === TypeUserEnum.BusinessAdmin
        ? ConnectionTypeEnum.BusinessToUser
        : ConnectionTypeEnum.UserToUser;

    this.connectionService
      .getConnection(id, connectionType)
      .subscribe((response) => {
        this.data = response;
        this.temp_data = response;
        this.loading = false;
      });
  }

  isSelected(connection: Connection) {
    return this.selectedConnections.some((c) => c.id === connection.id);
  }
}
