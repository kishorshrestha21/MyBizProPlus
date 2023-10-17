import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';
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
  cCids: any;
  submitText = 'Save';
  @ViewChild('resetCustomer') resetCustomerForm: any;
  constructor(
    private _headerService: HeaderService,
    private _fb: FormBuilder,
    private _states: StateService,
    private _customerService: CustomerService,
    private cdRef: ChangeDetectorRef,
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.customerFormGroup();
    this.states = this._states.states;
  }
  // Get customer ID =====
  getCid() {
    this._customerService.getCustomerSingalData().subscribe({
      next: (res: any) => {
        this.cCids = res[0].cId;

        const cIdControl = this.customerForm.get('customerDetail.cId');
        if (cIdControl) {
          cIdControl.setValue('C' + this.cCids);
        } else {
          console.error('customerDetail.cId control does not exist!');
        }

        this.cdRef.detectChanges();
      },
      error: (err) => {
        console.error('Failed to fetch the cId:', err);
      },
    });
  }
  customerFormGroup() {
    this.customerForm = this._fb.group({
      customerDetail: this._fb.group({
        cId: ['', Validators.required],
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
    this.cCids++; // Increment the cCids value
    const updatedData = { id: 1, cId: this.cCids }; // Assuming the record you want to update always has id: 1

    this._customerService
      .updateCustomerId(updatedData, updatedData.id)
      .subscribe({
        next: (res) => {},
        error: (err) => {
          console.error('Failed to update data:', err);
        },
      });
  }

  getCustomerDataInEditForm() {
    const id = this._activeRoute.snapshot.params['id'];
    if (id) {
      this.submitText = 'Update';
    }

    this._customerService.getCustomerById(id).subscribe({
      next: (res) => {
        this.customerForm.patchValue(res);
      },
    });
  }

  saveCustomer() {
    const id = this._activeRoute.snapshot.params['id'];
    if (id) {
      this._customerService
        .editCustomer(id, this.customerForm.value)
        .subscribe({
          next: (res) => {
            alert('Updated');
            this._router.navigate(['/customer/view-customer']);
          },
        });
    } else if (this.customerForm.valid) {
      this._customerService.addCustomer(this.customerForm.value).subscribe({
        next: (res) => {
          alert('Customer Added.');
          this.resetCustomerForm.resetForm();
          this.plus();
        },
        error: (err) => {
          console.error('Failed to save the customer:', err);
        },
      });
    } else {
      alert('Formnot valied');
    }
  }

  ngOnInit() {
    this._headerService.headerTitle.next('Add Customer');
    this._headerService.linkBtnText.next('View Customer');
    this._headerService.linkBtn.next('view-customer');
    this.getCid();
    this.getCustomerDataInEditForm();
  }
  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
    this._headerService.linkBtn.next('');
    this._headerService.linkBtnText.next('');
  }
}
