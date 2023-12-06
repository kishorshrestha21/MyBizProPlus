import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { RewardPointComponent } from 'src/app/Components/Customer/reward-point/reward-point.component';
import { BrandComponent } from 'src/app/Components/Settings/Brand/ViewBrand/brand.component';
import { AddBrandComponent } from 'src/app/Components/Settings/Brand/add-brand/add-brand.component';
import { AddCardComponent } from 'src/app/Components/Settings/Card/add-card/add-card.component';
import { CardComponent } from 'src/app/Components/Settings/Card/view-card/card.component';
import { AddPasscodeComponent } from 'src/app/Components/Settings/Passcode/add-passcode/add-passcode.component';
import { PassCodeComponent } from 'src/app/Components/Settings/Passcode/viewPassCode/pass-code.component';
import { AddSizeComponent } from 'src/app/Components/Settings/Size/add-size/add-size.component';
import { SizeComponent } from 'src/app/Components/Settings/Size/view-size/view-size.component';
import { AddUnitComponent } from 'src/app/Components/Settings/Unit/add-unit/add-unit.component';
import { UnitComponent } from 'src/app/Components/Settings/Unit/view-unit/view-unit.component';
import { RewardComponent } from 'src/app/Components/Settings/reward/reward.component';
import { SettingComponent } from 'src/app/Components/Settings/setting/setting.component';
import { TaxComponent } from 'src/app/Components/Settings/tax/tax.component';
import { AddVendorComponent } from 'src/app/Components/Vender/add-vendor/add-vendor.component';
import { ViewVendorComponent } from 'src/app/Components/Vender/view-vendor/view-vendor.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ViewSettingComponent } from 'src/app/Components/Settings/view-setting/view-setting.component';

const settingRoute: Routes = [
  {
    path: '',
    component: SettingComponent,
    children: [
      { path: 'brand', component: BrandComponent },
      { path: 'card', component: CardComponent },
      { path: 'view-setting', component: ViewSettingComponent },
      { path: '', redirectTo: 'setting', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    RewardPointComponent,
    SettingComponent,
    TaxComponent,
    BrandComponent,
    UnitComponent,
    SizeComponent,
    PassCodeComponent,
    RewardComponent,
    AddBrandComponent,
    CardComponent,
    AddCardComponent,
    AddPasscodeComponent,
    AddSizeComponent,
    AddUnitComponent,
    AddVendorComponent,
    ViewVendorComponent,
    ViewSettingComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(settingRoute),
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SettingModule {}
