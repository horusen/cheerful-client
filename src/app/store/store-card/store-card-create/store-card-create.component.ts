import { Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { BaseCreateComponent } from 'src/app/shared/base-component';
import { StoreCard } from '../store-card.model';
import { StoreCardService } from '../store-card.service';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-store-card-create',
  templateUrl: './store-card-create.component.html',
  styleUrls: ['./store-card-create.component.scss'],
})
export class StoreCardCreateComponent extends BaseCreateComponent<StoreCard> {
  cardImageUrl: String | null = null;
  constructor(
    public storeCardService: StoreCardService,
    public storeService: StoreService
  ) {
    super(storeCardService);
  }

  ngOnInit(): void {
    this.initForm();

    this.subscriptions['store'] = this.storeService.singleData$.subscribe(
      (store) => {
        if (store) this.form.controls['store_id'].patchValue(store.id);
      }
    );
  }

  initForm(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      store_id: [null, [Validators.required]],
      min_price: [null, [Validators.required]],
    });
  }

  override onFileChanged(event: any) {
    let fichier: File = event.target.files[0];
    this.formData.append('card_image', fichier);
    this.displayImage(fichier);
  }

  displayImage(image: File): void {
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      this.cardImageUrl = reader.result as string;
    };
  }

  override create() {
    if (this.form.invalid) {
      this.helper.notification.alertDanger('Invalid form');
      console.log(this.form.value);

      return;
    }

    this.loading = true;

    this.fillFormData(this.form.value);
    this.storeCardService.store(this.formData).subscribe(() => {
      this.loading = false;
      this.cardImageUrl = null;
      this.helper.notification.alertSuccess('Information added successfully');
      this.form.reset();
    });
  }
}
