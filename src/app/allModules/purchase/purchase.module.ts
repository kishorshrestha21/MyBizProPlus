import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from 'src/app/Components/Purchase/purchase/purchase.component';
import { AddPurchaseComponent } from 'src/app/Components/Purchase/add-purchase/add-purchase.component';
import { PurchaseReportComponent } from 'src/app/Components/Purchase/purchase-report/purchase-report.component';
import { PurchaseReturnComponent } from 'src/app/Components/Purchase/purchase-return/purchase-return.component';
import { RecivePurchaseComponent } from 'src/app/Components/Purchase/recive-purchase/recive-purchase.component';
import { ViewPurchaseOrderComponent } from 'src/app/Components/Purchase/view-purchase-order/view-purchase-order.component';
import { ViewPurchaseReturnComponent } from 'src/app/Components/Purchase/view-purchase-return/view-purchase-return.component';
import { ViewPurchaseComponent } from 'src/app/Components/Purchase/view-purchase/view-purchase.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';

const purchaseRoute: Routes = [
  {
    path: '',
    component: PurchaseComponent,
    children: [
      { path: 'add-purchase', component: AddPurchaseComponent },
      { path: 'purchse-return', component: PurchaseReturnComponent },
      { path: 'recive-purchase', component: RecivePurchaseComponent },
      { path: 'view-puchase-order', component: ViewPurchaseOrderComponent },
      { path: 'view-purchase', component: ViewPurchaseComponent },
      { path: 'view-purchase-return', component: ViewPurchaseReturnComponent },
      { path: '', redirectTo: 'view-purchase', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    PurchaseComponent,
    AddPurchaseComponent,
    ViewPurchaseComponent,
    PurchaseReportComponent,
    PurchaseReturnComponent,
    RecivePurchaseComponent,
    ViewPurchaseOrderComponent,
    ViewPurchaseReturnComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(purchaseRoute), MaterialModule],
})
export class PurchaseModule {}
