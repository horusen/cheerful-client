import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionIndividualComponent } from './section-individual.component';
import { SharedModule } from '../shared/shared.module';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SectionIndividualComponent,
  },
];

@NgModule({
  declarations: [SectionIndividualComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionIndividualModule {}
