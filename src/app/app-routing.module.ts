import { Component, NgModule, NgModuleFactory, Type } from '@angular/core';
import { DefaultExport, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/FrontPage/dashboard/dashboard.component';
import { DesignationComponent } from './Components/designation/designation.component';
import { AddDesignationComponent } from './Components/designation/add-designation/add-designation.component';
import { ViewDesignationComponent } from './Components/designation/view-designation/view-designation.component';
import { Test2Component } from './test2/test2.component';
import { ViewTest2Component } from './test2/view-test2/view-test2.component';
import { IdTest2Component } from './test2/id-test2/id-test2.component';
import { AddTest2Component } from './test2/add-test2/add-test2.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },

  {
    path: 'customer',
    loadChildren: () =>
      import('./allModules/customer-module/customer-module.module').then(
        (m) => m.CustomerModuleModule
      ),
  },

  {
    path: 'test',
    loadChildren: () =>
      import('./allModules/test/test.module').then((m) => m.TestModule),
  },

  {
    path: 'employee',
    loadChildren: () =>
      import('./allModules/employee/employee.module').then(
        (m) => m.EmployeeModule
      ),
  },

  {
    path: 'designation',
    component: DesignationComponent,
    children: [
      { path: 'add-designation', component: AddDesignationComponent },
      { path: 'view-designation', component: ViewDesignationComponent },
      { path: '', component: ViewDesignationComponent },
    ],
  },

  {
    path: 'purchase',
    loadChildren: () =>
      import('./allModules/purchase/purchase.module').then(
        (m) => m.PurchaseModule
      ),
  },

  {
    path: 'setting',
    loadChildren: () =>
      import('./allModules/setting/setting.module').then(
        (m) => m.SettingModule
      ),
  },

  {
    path: 'test2',
    component: Test2Component,
    children: [
      { path: 'view-test2', component: ViewTest2Component },
      { path: 'view-test2/:id', component: IdTest2Component },
      { path: 'add-test2', component: AddTest2Component },
      { path: 'add-tes2t/:id', component: AddTest2Component },
      { path: 'id-test2', component: IdTest2Component },
      { path: '', redirectTo: 'view-test2', pathMatch: 'full' },
    ],
  },

  { path: '', redirectTo: '/employee/view-employee', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// function m(
//   value: typeof import('/Users/kishor/Documents/newAngular/myBizProPlus/src/app/allModules/employee/employee.module')
// ):
//   | Routes
//   | Type<any>
//   | NgModuleFactory<any>
//   | DefaultExport<Type<any>>
//   | DefaultExport<Routes>
//   | PromiseLike<
//       | Routes
//       | Type<any>
//       | NgModuleFactory<any>
//       | DefaultExport<Type<any>>
//       | DefaultExport<Routes>
//     > {
//   throw new Error('Function not implemented.');
// }
