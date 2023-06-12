import { AppInjector } from './../services/app-injector.service';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from '../services/base.service';
import { BaseComponent } from './base.component';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '',
  template: '',
  styles: [],
})
export class BaseContainerComponent<T>
  extends BaseComponent<T>
  implements OnInit
{
  create = false;
  edit = false;
  filter = false;

  public router: Router;
  public modalService: NgbModal;
  public modalServiceConfig: NgbModalConfig;

  // A specifier à chaque fois que un component herite de  celui ci
  // Represent l'element sur lequel est s'appuie ce component: ex ministre, service, ministere
  // element!: string;

  constructor(
    public override service: BaseService<T>,
    public route: ActivatedRoute,
    @Inject('string') public element: string
  ) {
    super(service);
    this.router = AppInjector.injector.get(Router);
    this.modalService = AppInjector.injector.get(NgbModal);
    this.modalServiceConfig = AppInjector.injector.get(NgbModalConfig);
    this.modalServiceConfig.backdrop = 'static';
    this.modalServiceConfig.keyboard = false;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // this.route.fragment.subscribe((fragment) => {
    //   if (fragment === `add-${this.element}`) {
    //     this.create = true;
    //     this.helper.modal.show(`${this.element}-create-modal`);
    //   } else if (fragment === `edit-${this.element}`) {
    //     if (this.service.singleData) {
    //       this.edit = true;
    //       this.helper.modal.hide(`${this.element}-edit-modal`);
    //     } else {
    //       this.router.navigate(['./'], {
    //         relativeTo: this.route,
    //         queryParamsHandling: 'preserve',
    //       });
    //     }
    //   } else {
    //     // this.helper.modal.hide(`${this.element}-create-modal`);
    //   }
    // });
  }

  onCreated(): void {
    // this.helper.modal.hide(`${this.element}-create-modal`);
    // this.router.navigate(['./'], {
    //   relativeTo: this.route,
    //   queryParamsHandling: 'preserve',
    // });
  }

  onEdited(): void {
    // this.helper.modal.show(`${this.element}-edit-modal`);
    // this.router.navigate(['./'], {
    //   relativeTo: this.route,
    //   queryParamsHandling: 'preserve',
    // });
  }

  async supprimer(item: T & { id?: number }) {
    this.helper.notification.confirm(async () => {
      this.loading = true;

      await this.service.delete(item.id!);

      this.loading = false;
      this.helper.notification.alertSuccess();
    });
  }

  openModal(
    content: any,
    size: 'sm' | 'lg' | 'xl' = 'xl',
    centered: boolean = true,
    scrollable: boolean = true
  ) {
    this.modalService.open(content, {
      size,
      centered,
      scrollable,
    });
  }
}
