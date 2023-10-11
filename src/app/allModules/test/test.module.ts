import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IdTestComponent } from 'src/app/test/id-test/id-test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AddTestComponent } from 'src/app/test/add-test/add-test.component';
import { TestComponent } from 'src/app/test/test.component';
import { ViewTestComponent } from 'src/app/test/view-test/view-test.component';

const testRoutes: Routes = [
  {
    path: '',
    component: TestComponent,
    children: [
      { path: 'view-test', component: ViewTestComponent },
      { path: 'view-test/:abc', component: IdTestComponent },
      { path: 'add-test', component: AddTestComponent },
      { path: 'add-test/:id', component: AddTestComponent },
      { path: 'id-test', component: IdTestComponent },
      { path: '', redirectTo: 'view-test', pathMatch: 'full' },
    ],
  },
];
@NgModule({
  declarations: [
    TestComponent,
    AddTestComponent,
    ViewTestComponent,
    IdTestComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(testRoutes),
    ReactiveFormsModule,
  ],
})
export class TestModule {
  constructor() {
    console.log('Test Module');
  }
}
