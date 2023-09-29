import { TypeStore } from './../../../type-store/type-store.model';
import { CategoryStore } from './../../../category-store/category-store.model';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { BaseCreateComponent } from 'src/app/shared/base-component';
import { Store } from '../../../store.model';
import { StoreService } from '../../../store.service';
import { CategoryStoreService } from '../../../category-store/category-store.service';
import { TypeStoreService } from '../../../type-store/type-store.service';

@Component({
  selector: 'app-store-registration-basic-information-create',
  templateUrl: './store-registration-basic-information-create.component.html',
  styleUrls: ['./store-registration-basic-information-create.component.scss'],
})
export class StoreRegistrationBasicInformationCreateComponent extends BaseCreateComponent<Store> {
  logoImage = 'assets/img/content/profile/avatar-upload.png';
  coverImage = 'assets/img/content/profile/profile-cover-1.png';

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
    this.onlineLink = this.store.online_link;
  }

  initForm() {
    this.form = this.fb.group({
      name: [this.store.name, [Validators.required]],
      description: [this.store.description, [Validators.required]],
      phone_number: [this.store.phone_number, [Validators.required]],
      email: [this.store.email, [Validators.required]],
      online_link: [this.store.online_link, [Validators.required]],
      card_min_price: [this.store.card_min_price, [Validators.required]],
      type_store_id: [this.store.type_store_id, [Validators.required]],
      category_store_id: [this.store.category_store_id, [Validators.required]],
    });

    this.form.controls['online_link'].valueChanges.subscribe((value) => {
      this.onlineLink = value;
    });
  }

  displayImage(image: File, element: 'logo' | 'cover'): void {
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      element === 'logo'
        ? (this.logoImage = reader.result as string)
        : (this.coverImage = reader.result as string);
    };
  }

  override onFileChanged(event: any, name: 'logo' | 'cover' = 'logo') {
    let fichier: File = event.target.files[0];
    // if (fichier.type !== 'application/pdf') {
    //   return this.helper.alertDanger('Format Invalide');
    // }

    this.formData.append(name, fichier);
    this.displayImage(fichier, name);
  }

  ngOnInit(): void {
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
      this.logInvalidFields(this.form);
      return;
    }

    this.loading = true;
    const data = {
      ...this.form.value,
      type_store_id: Number(this.form.value.type_store_id),
      category_store_id: Number(this.form.value.category_store_id),
    };

    this.fillFormData(data);
    this.service.update(this.store.id!, this.formData).subscribe(() => {
      this.loading = false;
      this.helper.notification.alertSuccess('Information added successfully');
      // this.router.navigate([
      //   '/store/store-registration/store-registration-basic-information',
      // ]);
    });
  }
}
