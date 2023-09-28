import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HeaderService } from 'src/app/Services/header.service';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private _memberService: MemberService,
    private _headerService: HeaderService
  ) {}

  newMemberForm!: FormGroup;
  newMembers: any[] = [];
  file_arr: any;
  displayedImageUrl: any;
  isImageChanged = false; // Add this property to track if the image has been changed
  currentImageUrl: string | null = null; // To store the existing image URL
  selectedMemberId: number | null = null; // To track the selected member's ID

  newUploadFile(event: any) {
    const file: File = event.target.files ? event.target.files[0] : null;
    if (file) {
      console.log('Selected File:', file);
      this.file_arr = file;
      this.isImageChanged = true;
    }
  }

  getMemberData() {
    this._memberService.getMember().subscribe({
      next: (res: any) => {
        this.newMembers = res;
        console.log(res);
      },
    });
  }

  onSave() {
    const formData = new FormData();

    formData.append(
      'fname',
      this.newMemberForm.get('memberDetail.fname')?.value
    );
    formData.append(
      'lname',
      this.newMemberForm.get('memberDetail.lname')?.value
    );

    if (this.isImageChanged) {
      formData.append('image', this.file_arr);
    } else if (this.currentImageUrl) {
      formData.append('image', this.currentImageUrl);
    }

    this._memberService.addMember(formData).subscribe({
      next: (res: any) => {
        alert('Employee added successfully');
        this.getMemberData();
        console.log('Response');
        console.log(res);
      },
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

    console.log(this.newMemberForm.value);
  }

  editMember(newMember: any) {
    this._memberService.getMemberById(newMember.id).subscribe({
      next: (res: any) => {
        this.newMemberForm.patchValue({
          memberDetail: {
            fname: res.memberDetail.fname,
            lname: res.memberDetail.lname,
          },
        });
        this.displayedImageUrl = res.memberDetail.image;
        this.currentImageUrl = res.memberDetail.image;
        console.log(res);
      },
      error: (err: any) => {
        console.error(err);
        alert('Error fetching member data.');
      },
    });
  }

  deleteMember(id: number) {
    this._memberService.deleteMember(id).subscribe({
      next: (res) => {
        alert('deleted');
        this.getMemberData();
      },
    });
  }

  updateMember() {
    if (!this.newMemberForm.valid) {
      alert('Form is not valid!'); // or handle in another way.
      return;
    }

    const formData = new FormData();
    formData.append(
      'fname',
      this.newMemberForm.get('memberDetail.fname')?.value
    );
    formData.append(
      'lname',
      this.newMemberForm.get('memberDetail.lname')?.value
    );

    if (this.isImageChanged) {
      formData.append('image', this.file_arr);
    } else if (this.currentImageUrl) {
      formData.append('image', this.currentImageUrl);
    }

    const memberId = this.newMemberForm.value.id;

    this._memberService.editMember(memberId, formData).subscribe({
      next: (res: any) => {
        alert('Member updated successfully');
        this.getMemberData();
        console.log('Response', res);
      },
      error: (err: any) => {
        console.error('Error:', err);
        alert('An error occurred while updating the member.');
      },
    });
  }

  ngOnInit(): void {
    this._headerService.headerTitle.next('Dashboard');
    this.newMemberForm = this._fb.group({
      id: [null], // Add a control for the ID
      memberDetail: this._fb.group({
        fname: [''],
        lname: [''],
        image: [null],
      }),
    });
    this.getMemberData();
  }

  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
  }
}

//endClass====================================================================

// export class DashboardComponent implements OnInit, OnDestroy {
//   constructor(
//     private _headerService: HeaderService,
//     private _fb: FormBuilder,
//     private _memberService: MemberService
//   ) {}

//   memberDetail: any;
//   memberForm!: FormGroup;
//   members: any = [];
//   newMemberForm!: FormGroup;
//   newMembers: any[] = [];
//   file_arr: any;

// ulploadFile(event: any) {
//   const file: File = event.target.files ? event.target.files[0] : null;
//   console.log(file);
//   if (file) {
//     this.memberForm.patchValue({
//       image: file,
//     });
//   }
// }

// onSubmit() {
//   const formData = new FormData();

//   formData.append('fname', this.memberForm.get('fname')?.value);
//   formData.append('lname', this.memberForm.get('lname')?.value);
//   formData.append('image', this.memberForm.get('image')?.value);

//   this._memberService.addMember(formData).subscribe({
//     next: (res: any) => {
//       alert('Employee added successfully');
//       this.getMemberData();
//     },
//     error: (err: any) => {
//       if (err && err.error && err.error.errors) {
//         const errorMessages = Object.values(err.error.errors).flat();
//         const errorMessage = errorMessages.join('\n');
//         alert(`Error adding employee: ${errorMessage}`);
//       } else {
//         console.error(err);
//         alert('An unknown error occurred.');
//       }
//     },
//   });
// }

// getMemberData() {
//   this._memberService.getMember().subscribe({
//     next: (res: any) => {
//       this.members = res;
//       console.log(res);
//     },
//   });
// }
// newUploadFile(event: any) {
//   const file: File = event.target.files ? event.target.files[0] : null;
//   if (file) {
//     this.newMemberForm.patchValue({
//       image: event.target.files[0],
//     });
//     alert(file);
//   } else {
//     alert('no file');
//   }
//   if (event.target.files.length > 0) {
//     const file = event.target.files[0];
//     console.log(file.name);
//     this.file_arr = file;
//   }
// }

// getMemberData() {
//   this._memberService.getMember().subscribe({
//     next: (res: any) => {
//       this.newMembers = res;
//       console.log(res);
//     },
//   });
// }

// onSave() {
//   const formData = new FormData();

//   formData.append(
//     'fname',
//     this.newMemberForm.get('memberDetail.fname')?.value
//   );
//   formData.append(
//     'lname',
//     this.newMemberForm.get('memberDetail.lname')?.value
//   );

//   formData.append('image', this.file_arr);
//   this.newMemberForm.get('memberDetail.image')?.value;

//   this._memberService.addMember(formData).subscribe({
//     next: (res: any) => {
//       alert('Employee added successfully');
//       this.getMemberData();
//       console.log('Response');
//       console.log(res);
//     },
//     error: (err: any) => {
//       if (err && err.error && err.error.errors) {
//         const errorMessages = Object.values(err.error.errors).flat();
//         const errorMessage = errorMessages.join('\n');

//         console.log('error ' + err);
//       } else {
//         console.error(err);
//         alert('An unknown error occurred.');
//       }
//     },
//   });

//   console.log(this.newMemberForm.value);

// this._memberService.addMember(this.newMemberForm.value).subscribe({
//   next: (res: any) => {
//     this.getMemberData();
//   },
// });
// }

// ngOnInit(): void {
// this.memberForm = this._fb.group({
//   fname: [''],
//   lname: [''],
//   image: [null],
// });

//     this.newMemberForm = this._fb.group({
//       memberDetail: this._fb.group({
//         fname: [''],
//         lname: [''],
//         image: [null],
//       }),
//     });

//     this._headerService.headerTitle.next('Dashboard');

//     this.getMemberData();
//   }

//   ngOnDestroy(): void {
//     this._headerService.headerTitle.next('');
//   }
// }
