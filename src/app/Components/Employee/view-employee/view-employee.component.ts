import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';
import { HeaderService } from 'src/app/Services/header.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs';
import { employee } from 'src/app/_interface/dataType';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss'],
})
export class ViewEmployeeComponent implements OnInit, OnDestroy {
  employee: any;
  last: any;
  constructor(
    private _headerService: HeaderService,
    private _employeeService: EmployeeService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _fb: FormBuilder
  ) {
    // this.employeeForm = this._fb.group({
    //   employeeDetail: this._fb.group({
    //     firstname: ['', Validators.required],
    //     middlename: [''],
    //     lastname: ['', Validators.required],
    //     email: [
    //       '',
    //       Validators.compose([Validators.email, Validators.required]),
    //     ], // added basic email validation
    //     phone: ['', [Validators.pattern(/^\d{10}$/), Validators.required]], // corrected phone validation
    //     gender: ['', Validators.required],
    //   }),
    //   employeeAddress: this._fb.group({
    //     address: ['', Validators.required],
    //     appartment: [''],
    //     city: ['', Validators.required],
    //     state: ['', Validators.required],
    //     zipcode: ['', Validators.required],
    //   }),
    //   employeeIdentity: this._fb.group({
    //     designation: [[], Validators.required],
    //     level: [[], Validators.required],
    //     photo: [''],
    //     idCard: [''],
    //   }),
    //   passwordField: this._fb.group({
    //     password: ['', Validators.required],
    //     confirmPassword: ['', Validators.required],
    //   }),
    //   emergencyContact: this._fb.group({
    //     eFirstName: ['', Validators.required],
    //     eLastName: ['', Validators.required],
    //     ePhoneNo: ['', Validators.required],
    //     eRelation: ['', Validators.required],
    //   }),
    // });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Specify the columns to be displayed in the table
  displayedColumns: string[] = [
    'id',
    'employeeDetail.firstname',
    'employeeDetail.middlename',
    'employeeDetail.lastname',
    'employeeDetail.email',
    'employeeDetail.phone',
    'employeeIdentity.designation',
    'employeeIdentity.photo',
    'action',
  ];

  employeeForm!: FormGroup;

  // this.employeeForm.updateValueAndValidity();

  // navigate child route form another component
  navigateToAddEmployee(id: number) {
    this._router.navigate(['/employee/add-employee', id]);

    // this._employeeService.getEmployeeById
  }
  // Initialize the data source
  dataSource!: MatTableDataSource<any>;
  employees: any[] = [];

  // Fetch employee data from the service
  getEmployeeData() {
    this._employeeService.getEmployee().subscribe({
      next: (res: any) => {
        this.employees = res;
        console.log(this.employees);
        // Create a new MatTableDataSource with the fetched data
        this.dataSource = new MatTableDataSource(res);

        // Connect the sort and paginator to the data source
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = this.customFilterPredicate.bind(this);

        this.dataSource.sortingDataAccessor = (item, property) => {
          switch (property) {
            case 'employeeDetail.firstname':
              return item.employeeDetail?.firstname;
            case 'employeeDetail.lastname':
              return item.employeeDetail?.lastname;
            default:
              return item[property];
          }
        };
      },
      error: console.log,
    });
  }

  deletEmployeeById(id: number) {
    this._employeeService.deleteEmployee(id).subscribe({
      next: (res) => {
        alert('delete');
        this.getEmployeeData();
      },
      error: console.log,
    });
  }

  editEmployeeById() {}

  // Apply filter to the data source
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Custom filter predicate
  customFilterPredicate(data: any, filter: string): boolean {
    const filterLowerCase = filter.toLowerCase();

    return (
      data.id?.toString().includes(filterLowerCase) ||
      false ||
      (data.employeeDetail?.firstname ?? '')
        .toLowerCase()
        .includes(filterLowerCase) ||
      (data.employeeDetail?.lastname ?? '')
        .toLowerCase()
        .includes(filterLowerCase)
    );
  }

  // Set up the paginator and sort after view initialization
  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  // Initialize the component
  ngOnInit(): void {
    this._headerService.headerTitle.next('Employee List');
    this._headerService.linkBtn.next('add-employee');
    this._headerService.linkBtnText.next('Add Employee');

    this.getEmployeeData();
    // this.employeesForm();
  }

  // Clean up resources on component destruction
  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
    this._headerService.linkBtn.next('');
    this._headerService.linkBtnText.next('');
  }
}
