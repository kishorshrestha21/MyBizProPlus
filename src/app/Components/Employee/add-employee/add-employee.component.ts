import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DesignationService } from 'src/app/Services/designation.service';
import { EmployeeService } from 'src/app/Services/employee.service';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit, OnDestroy {
  [x: string]: any;
  employeeForm: any;
  toppings: any;
  file_arr: any;
  idFileInput: any;
  fileName: string = '';
  idFileName: any = '';
  currentPhotoFilename: any;
  currentIdCardFilename: any;
  isImagePhotoChanged = false;
  isImageIdCardChanged = false;
  displayedPhoto: any;
  displayedIdCard: any;
  submitText: string = 'Save';
  photoName = 'Upload Photo';
  iDName = 'Upload ID';
  selectedValue!: string;
  selectedCar!: string;
  changeType: boolean = true;
  visible: boolean = true;
  employees = [];
  empImage: any;
  empId: any;

  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  designations: any[] = [];
  @ViewChild('f') myForm: any;
  constructor(
    private _headerService: HeaderService,
    private _fb: FormBuilder,
    private _employeeService: EmployeeService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
    private _designationService: DesignationService
  ) {}

  getDesignationData() {
    this._designationService.getDesignation().subscribe({
      next: (res) => {
        this.designations = res;
      },
    });
  }
  // designations: string[] = ['Stylist', 'Cashier', 'Receptionist', 'Managar'];

  levels: string[] = [
    'Level 1',
    'Level 2',
    'Level 3',
    'Level 4',
    'Level 5',
    'Level 6',
  ];

  onFileChange(event: any) {
    const empImageFile: File = event.target.files
      ? event.target.files[0]
      : null;

    if (empImageFile) {
      this.empImage = empImageFile;
      this.fileName = empImageFile.name;
      this.isImagePhotoChanged = true;
    }
  }

  onIdFileChange(event: any) {
    const empIdFile: File = event.target.files ? event.target.files[0] : null;

    console.log(empIdFile);
    if (empIdFile) {
      this.empId = empIdFile;
      this.idFileName = empIdFile.name;
      this.isImageIdCardChanged = true;
    }
  }

  deleteFile(fileInput: any) {
    fileInput.value = '';
    this.fileName = '';
  }

  deleteIdFile(idFileInput: any) {
    idFileInput.valid = '';
    this.idFileName = '';
  }

  viewPassword() {
    this.changeType = !this.changeType;
    this.visible = !this.visible;
  }

  employeesForm() {
    this.employeeForm = this._fb.group({
      employeeDetail: this._fb.group({
        firstname: ['', Validators.required],
        middlename: [''],
        lastname: ['', Validators.required],
        email: [
          '',
          Validators.compose([Validators.email, Validators.required]),
        ], // added basic email validation
        phone: ['', [Validators.pattern(/^\d{10}$/), Validators.required]], // corrected phone validation
        gender: ['', Validators.required],
      }),
      employeeAddress: this._fb.group({
        address: ['', Validators.required],
        appartment: [''],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipCode: ['', Validators.required],
      }),

      passwordField: this._fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      }),

      emergencyContact: this._fb.group({
        eFirstName: ['', Validators.required],
        eLastName: ['', Validators.required],
        ePhoneNo: ['', Validators.required],
        eRelation: ['', Validators.required],
      }),

      employeeIdentity: this._fb.group({
        designation: [[], Validators.required],
        level: [[], Validators.required],
        photo: [null],
        idCard: [null],
      }),
    });
  }

  onSubmit() {
    const id = this._activeRoute.snapshot.params['id'];

    if (id) {
      const formData = new FormData();
      formData.append('_method', 'PUT');
      if (this.employeeForm.valid) {
        formData.append(
          'firstname',
          this.employeeForm.get('employeeDetail.firstname')?.value
        );

        formData.append(
          'middlename',
          this.employeeForm.get('employeeDetail.middlename')?.value
        );

        formData.append(
          'lastname',
          this.employeeForm.get('employeeDetail.lastname')?.value
        );

        formData.append(
          ' email',
          this.employeeForm.get('employeeDetail.email')?.value
        );

        formData.append(
          'phone',
          this.employeeForm.get('employeeDetail.phone')?.value
        );

        formData.append(
          'gender',
          this.employeeForm.get('employeeDetail.gender')?.value
        );

        formData.append(
          'address',
          this.employeeForm.get('employeeAddress.address')?.value
        );

        formData.append(
          'city',
          this.employeeForm.get('employeeAddress.city')?.value
        );

        formData.append(
          'state',
          this.employeeForm.get('employeeAddress.state')?.value
        );

        formData.append(
          'zipCode',
          this.employeeForm.get('employeeAddress.zipCode')?.value
        );

        formData.append(
          'password',
          this.employeeForm.get('passwordField.password')?.value
        );

        formData.append(
          'confirmPassword',
          this.employeeForm.get('passwordField.confirmPassword')?.value
        );

        formData.append(
          'eFirstName',
          this.employeeForm.get('emergencyContact.eFirstName')?.value
        );

        formData.append(
          'eLastName',
          this.employeeForm.get('emergencyContact.eLastName')?.value
        );

        formData.append(
          'ePhoneNo',
          this.employeeForm.get('emergencyContact.ePhoneNo')?.value
        );

        formData.append(
          'eRelation',
          this.employeeForm.get('emergencyContact.eRelation')?.value
        );
        formData.append(
          'designation',
          this.employeeForm.get('employeeIdentity.designation')?.value
        );

        formData.append(
          'level',
          this.employeeForm.get('employeeIdentity.level')?.value
        );

        if (this.isImagePhotoChanged) {
          formData.append('photo', this.empImage);
        } else if (this.currentPhotoFilename) {
          formData.append('photo', this.currentPhotoFilename);
        }

        if (this.isImageIdCardChanged) {
          formData.append('idCard', this.empId);
        } else if (this.currentIdCardFilename) {
          formData.append('photo', this.currentIdCardFilename);
        }

        this._employeeService.editEmployee(id, formData).subscribe({
          next: (res: any) => {
            alert('Employee updated successfully');
          },
          error: (err: any) => {
            console.error(err);
            alert('Error updating employee.');
          },
        });
      } else {
        alert('Check the red Mark');
      }
    } else {
      const formData = new FormData();

      if (this.employeeForm.valid) {
        formData.append(
          'firstname',
          this.employeeForm.get('employeeDetail.firstname')?.value
        );

        formData.append(
          'middlename',
          this.employeeForm.get('employeeDetail.middlename')?.value
        );

        formData.append(
          'lastname',
          this.employeeForm.get('employeeDetail.lastname')?.value
        );

        formData.append(
          ' email',
          this.employeeForm.get('employeeDetail.email')?.value
        );

        formData.append(
          'phone',
          this.employeeForm.get('employeeDetail.phone')?.value
        );

        formData.append(
          'gender',
          this.employeeForm.get('employeeDetail.gender')?.value
        );

        formData.append(
          'address',
          this.employeeForm.get('employeeAddress.address')?.value
        );

        formData.append(
          'city',
          this.employeeForm.get('employeeAddress.city')?.value
        );

        formData.append(
          'state',
          this.employeeForm.get('employeeAddress.state')?.value
        );

        formData.append(
          'zipCode',
          this.employeeForm.get('employeeAddress.zipCode')?.value
        );

        formData.append(
          'password',
          this.employeeForm.get('passwordField.password')?.value
        );

        formData.append(
          'confirmPassword',
          this.employeeForm.get('passwordField.confirmPassword')?.value
        );

        formData.append(
          'eFirstName',
          this.employeeForm.get('emergencyContact.eFirstName')?.value
        );

        formData.append(
          'eLastName',
          this.employeeForm.get('emergencyContact.eLastName')?.value
        );

        formData.append(
          'ePhoneNo',
          this.employeeForm.get('emergencyContact.ePhoneNo')?.value
        );

        formData.append(
          'eRelation',
          this.employeeForm.get('emergencyContact.eRelation')?.value
        );
        formData.append(
          'designation',
          this.employeeForm.get('employeeIdentity.designation')?.value
        );

        formData.append(
          'level',
          this.employeeForm.get('employeeIdentity.level')?.value
        );

        formData.append('photo', this.empImage);

        formData.append('idCard', this.empId);

        this._employeeService.addEmployee(formData).subscribe({
          next: (res: any) => {},
          error: (err: any) => {
            if (err && err.error && err.error.errors) {
              const errorMessages = Object.values(err.error.errors).flat();
              const errorMessage = errorMessages.join('\n');
              console.log('error ' + err);
            } else {
              console.error(err);
              alert('An unknown error occurred.');
            }
          },
        });
        alert('Employee added successfully');
        this.myForm.resetForm();
        this.empImage = '';
        this.empId = '';
        this.isImagePhotoChanged = false;
        this.isImageIdCardChanged = false;
        this.fileName = '';
        this.idFileName = '';

        // console.log(this.employeeForm.value);
      } else {
        this.employeeForm.markAllAsTouched();
        alert('Check the red Mark');
      }
    }
  }

  getDataInEditForm() {
    const id = this._activeRoute.snapshot.params['id'];
    if (id) {
      this.submitText = 'Update';
      this.photoName = 'Edit Photo';
      this.iDName = 'Edit Id';

      this._employeeService.getEmployeeById(id).subscribe({
        next: (res: any) => {
          console.log('Raw Response:', res);

          console.log('Before:', res.employeeIdentity.designation);

          this.employeeForm.patchValue({
            employeeDetail: {
              firstname: res.employeeDetail.firstname,
              middletname: res.employeeDetail.middletname,
              lastname: res.employeeDetail.lastname,
              phone: res.employeeDetail.phone,
              email: res.employeeDetail.email,
              gender: res.employeeDetail.gender,
            },
            employeeAddress: {
              address: res.employeeAddress.address,
              appartment: res.employeeAddress.appartment,
              city: res.employeeAddress.city,
              state: res.employeeAddress.state,
              zipCode: res.employeeAddress.zipCode,
            },

            passwordField: {
              password: res.passwordField.password,
              confirmPassword: res.passwordField.confirmPassword,
            },

            emergencyContact: {
              eFirstName: res.emergencyContact.eFirstName,
              eLastName: res.emergencyContact.eLastName,
              eRelation: res.emergencyContact.eRelation,
              ePhoneNo: res.emergencyContact.ePhoneNo,
            },
          });

          if (
            res.employeeIdentity.designation.length === 1 &&
            res.employeeIdentity.designation[0].includes(',')
          ) {
            res.employeeIdentity.designation =
              res.employeeIdentity.designation[0].split(',');
          }
          console.log('After:', res.employeeIdentity.designation);

          this.employeeForm.patchValue({
            employeeIdentity: {
              designation: res.employeeIdentity.designation,
              level: res.employeeIdentity.level,
            },
          });
          this.displayedPhoto = res.employeeIdentity.photo;
          this.displayedIdCard = res.employeeIdentity.idCard;
          this.currentPhotoFilename = res.employeeIdentity.photo;
          this.currentIdCardFilename = res.employeeIdentity.idCard;
        },
        error: (err) => {
          console.error(err);
          alert('Error fetching employee details.');
        },
      });
    }
  }

  // ========================================================

  ngOnInit(): void {
    this.employeesForm();

    this._headerService.headerTitle.next('Employee Form');
    this._headerService.linkBtn.next('view-employee');
    this._headerService.linkBtnText.next('View Employee');

    this.getDataInEditForm();
    this.getDesignationData();
  }

  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
    this._headerService.linkBtn.next('');
    this._headerService.linkBtnText.next('');
  }
}
// ======================
