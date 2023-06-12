import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { BaseCreateComponent } from 'src/app/shared/base-component';
import { CategoryStore } from 'src/app/store/category-store/category-store.model';
import { CategoryStoreService } from 'src/app/store/category-store/category-store.service';
import { Store } from 'src/app/store/store.model';
import { StoreService } from 'src/app/store/store.service';
import { TypeStore } from 'src/app/store/type-store/type-store.model';
import { TypeStoreService } from 'src/app/store/type-store/type-store.service';

@Component({
  selector: 'app-store-registration-basic-information-create',
  templateUrl: './store-registration-basic-information-create.component.html',
  styleUrls: ['./store-registration-basic-information-create.component.scss'],
})
export class StoreRegistrationBasicInformationCreateComponent extends BaseCreateComponent<Store> {
  store: Store;
  onlineLink: string = '';
  categories: CategoryStore[] = [];
  types: TypeStore[] = [];

  constructor(
    public storeService: StoreService,
    public categoryStoreService: CategoryStoreService,
    public typeStoreService: TypeStoreService,
    public authService: AuthService
  ) {
    super(storeService);
    this.store = this.authService.shop;
    this.onlineLink = this.store.store_online_link;
  }

  initForm() {
    this.form = this.fb.group({
      name: [this.store.name, [Validators.required]],
      description: [this.store.description, [Validators.required]],
      phone_number: [this.store.phone_number, [Validators.required]],
      email: [this.store.email, [Validators.required]],
      store_online_link: [this.store.store_online_link, [Validators.required]],
      type_store_id: [this.store.type_store_id, [Validators.required]],
      category_store_id: [this.store.category_store_id, [Validators.required]],
    });

    this.form.controls['store_online_link'].valueChanges.subscribe((value) => {
      this.onlineLink = value;
    });
  }

  ngOnInit(): void {
    console.log(this.authService.isStoreSetup);

    this.typeStoreService.get().subscribe();
    this.categoryStoreService.get().subscribe();

    this.subscriptions['categories'] =
      this.categoryStoreService.data$.subscribe((data) => {
        this.categories = data;
      });

    this.subscriptions['types'] = this.typeStoreService.data$.subscribe(
      (data) => {
        this.types = data;
      }
    );

    this.initForm();
  }

  override create() {
    if (this.form.invalid) {
      this.helper.notification.alertDanger('Invalid form');
      console.log(this.form.value);

      return;
    }

    this.loading = true;
    const data = {
      ...this.form.value,
      type_store_id: Number(this.form.value.type_store_id),
      category_store_id: Number(this.form.value.category_store_id),
    };
    this.service.update(this.store.id!, data).subscribe(() => {
      this.loading = false;
      this.helper.notification.alertSuccess('Information added successfully');
      // this.router.navigate([
      //   '/store/store-registration/store-registration-basic-information',
      // ]);
    });
  }
}
