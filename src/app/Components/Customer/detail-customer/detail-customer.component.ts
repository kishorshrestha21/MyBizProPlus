import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.scss'],
})
export class DetailCustomerComponent implements OnInit {
  customerDetails: any[] = [];
  constructor(
    private _customerService: CustomerService,
    private _activeRoute: ActivatedRoute
  ) {}

  public customer: any;

  getCustomerDataInEditForm() {
    const id = this._activeRoute.snapshot.params['id'];
    this._customerService.getCustomerById(id).subscribe({
      next: (res) => {
        this.customer = res;
      },
      error: (err: any) => {
        console.error(err);
        alert('Error fetching member data.');
      },
    });
  }

  ngOnInit(): void {
    this.getCustomerDataInEditForm();
  }
}
