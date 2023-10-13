import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(
    private _headerService: HeaderService,
    private _fb: FormBuilder,
    private _states: StateService,
    private _customerService: CustomerService,
    private cdRef: ChangeDetectorRef
  ) {
    this.customerFormGroup();
    this.states = this._states.states;
  }
  // saveId(data: any) {
  //   this.customerId = this.customerId + 1;
  //   this._customerService.addCustomerId(data).subscribe({
  //     next: (res) => {},
  //   });
  // }

  getCid() {
    this._customerService.getCustomerSingalData().subscribe({
      next: (res: any) => {
        this.cCids = res[0].cId;
        this.cdRef.detectChanges();
      },
    });
  }

  saveId(data: any) {
    // this._customerService.getCustomerId(1).subscribe(
    //   (existingData) => {
    //     existingData.cId = this.customerId;
    //     this.customerId++;
    //     this._customerService
    //       .updateCustomerId(existingData, existingData.id)
    //       .subscribe({
    //         next: (res) => {
    //           this.getCid();
    //           console.log(
    //             'Data updated successfully with cId:',
    //             existingData.cId
    //           );
    //         },
    //         error: (err) => {
    //           console.error('Failed to update data:', err);
    //         },
    //       });
    //   },
    //   (error) => {
    //     console.error('Failed to fetch existing data:', error);
    //   }
    // );
  }

  customerFormGroup() {
    this.customerForm = this._fb.group({
      customerDetail: this._fb.group({
        cId: [],
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

  saveCustomer() {
    this._customerService.addCustomer(this.customerForm.value).subscribe({
      next: (res) => {
        alert('Customer Added.');
      },
    });
  }

  ngOnInit() {
    this._headerService.headerTitle.next('Add Customer');
    this._headerService.linkBtnText.next('View Customer');
    this._headerService.linkBtn.next('view-customer');
    this.getCid();
  }
  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
    this._headerService.linkBtn.next('');
    this._headerService.linkBtnText.next('');
  }
}
