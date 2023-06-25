import { Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { BaseCreateComponent } from 'src/app/shared/base-component';
import { StoreProduct } from '../store-product.model';
import { StoreProductService } from '../store-product.service';
import { AuthService } from 'src/app/auth/auth.service';
import { StoreService } from 'src/app/store/store.service';

@Component({
  selector: 'app-store-product-create',
  templateUrl: './store-product-create.component.html',
  styleUrls: ['./store-product-create.component.scss'],
})
export class StoreProductCreateComponent extends BaseCreateComponent<StoreProduct> {
  productImageUrl: string | undefined;
  constructor(
    public storeProductService: StoreProductService,
    public storeService: StoreService
  ) {
    super(storeProductService);
  }

  initForm() {
    this.form = this.fb.group({
      store_id: [null, [Validators.required]],
      name: [null, [Validators.required]],
      price: [null, [Validators.required]],
      description: [null],
    });
  }

  ngOnInit(): void {
    this.initForm();

    this.subscriptions['store'] = this.storeService.singleData$.subscribe(
      (single) => {
        if (single)
          this.form.patchValue({
            store_id: single.id,
          });
      }
    );
  }

  override onFileChanged(event: any) {
    let fichier: File = event.target.files[0];
    this.formData.append('image', fichier);
    this.displayImage(fichier);
  }

  displayImage(image: File): void {
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      this.productImageUrl = reader.result as string;
    };
  }

  override create() {
    if (this.form.invalid) {
      this.helper.notification.alertDanger('Invalid form');
      return;
    }

    this.fillFormData(this.form.value);

    this.storeProductService.store(this.formData).subscribe((res) => {
      this.helper.notification.alertSuccess();
      this.form.reset();
      this.created.emit();
    });
  }
}
