import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeaderService } from 'src/app/Services/header.service';
import { StateService } from 'src/app/Services/state.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit, OnDestroy {
  customerId: number = 1000;
  customers: any[] = [];
  customerForm!: FormGroup;
  states: string[] = [];
  constructor(
    private _headerService: HeaderService,
    private _fb: FormBuilder,
    private _states: StateService
  ) {
    this.customerFormGroup();
    this.states = this._states.states;
  }

  customerFormGroup() {
    this.customerForm = this._fb.group({
      customerDetail: this._fb.group({
        cName: ['', Validators.required],
        cLName: ['', Validators.required],
        cPhone: ['', Validators.required],
        cEmail: ['', Validators.required],
        cDob: [''],
        cGender: ['', Validators.required],
      }),

      customerAddress: this._fb.group({
        cAddress: ['', Validators.required],
        cApartment: [''],
        cCity: ['', Validators.required],
        cState: ['', Validators.required],
        cZipcode: ['', Validators.required],
      }),
    });
  }
  plus() {
    this.customerId = this.customerId + 1;
  }
  saveCustomer() {}

  ngOnInit() {
    this._headerService.headerTitle.next('Add Customer');
    this._headerService.linkBtnText.next('View Customer');
    this._headerService.linkBtn.next('view-customer');
  }
  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
    this._headerService.linkBtn.next('');
    this._headerService.linkBtnText.next('');
  }
}
