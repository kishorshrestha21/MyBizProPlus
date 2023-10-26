import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Components/FrontPage/container/container.component';
import { SidenavComponent } from './Components/FrontPage/sidenav/sidenav.component';
import { ContentComponent } from './Components/FrontPage/content/content.component';
import { HeaderComponent } from './Components/FrontPage/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from './allModules/services/services.module';
import { MaterialModule } from './allModules/material/material.module';
import { DashboardComponent } from './Components/FrontPage/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { DesignationComponent } from './Components/designation/designation.component';
import { AddDesignationComponent } from './Components/designation/add-designation/add-designation.component';
import { ViewDesignationComponent } from './Components/designation/view-designation/view-designation.component';
import { Test2Component } from './test2/test2.component';
import { AddTest2Component } from './test2/add-test2/add-test2.component';
import { ViewTest2Component } from './test2/view-test2/view-test2.component';
import { IdTest2Component } from './test2/id-test2/id-test2.component';
import { RewardPointComponent } from './Components/Customer/reward-point/reward-point.component';
import { EmployeeModule } from './allModules/employee/employee.module';
import { TestModule } from './allModules/test/test.module';
import { EmployeeFilterPipe } from './pipes/employee-filter.pipe';
import { PurchaseComponent } from './Components/Purchase/purchase/purchase.component';
import { AddPurchaseComponent } from './Components/Purchase/add-purchase/add-purchase.component';
import { ViewPurchaseComponent } from './Components/Purchase/view-purchase/view-purchase.component';
import { PurchaseReportComponent } from './Components/Purchase/purchase-report/purchase-report.component';
import { SettingComponent } from './Components/Settings/setting/setting.component';
import { TaxComponent } from './Components/Settings/tax/tax.component';
import { BrandComponent } from './Components/Settings/Brand/ViewBrand/brand.component';
import { UnitComponent } from './Components/Settings/unit/unit.component';
import { SizeComponent } from './Components/Settings/Size/view-size/view-size.component';
import { CardComponent } from './Components/Settings/Card/view-card/card.component';
import { PassCodeComponent } from './Components/Settings/Passcode/viewPassCode/pass-code.component';
import { RewardComponent } from './Components/Settings/reward/reward.component';
import { AddBrandComponent } from './Components/Settings/Brand/add-brand/add-brand.component';
import { AddCardComponent } from './Components/Settings/Card/add-card/add-card.component';
import { AddPasscodeComponent } from './Components/Settings/Passcode/add-passcode/add-passcode.component';
import { AddSizeComponent } from './Components/Settings/Size/add-size/add-size.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SidenavComponent,
    ContentComponent,
    HeaderComponent,
    DashboardComponent,
    FilterPipe,
    DesignationComponent,
    AddDesignationComponent,
    ViewDesignationComponent,
    Test2Component,
    AddTest2Component,
    ViewTest2Component,
    IdTest2Component,
    RewardPointComponent,
    PurchaseComponent,
    AddPurchaseComponent,
    ViewPurchaseComponent,
    PurchaseReportComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServicesModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // EmployeeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('App Module');
  }
}
