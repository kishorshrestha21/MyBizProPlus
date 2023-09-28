import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.scss'],
})
export class AddTestComponent implements OnInit {
  file_arr: any;
  newMembers: any[] = [];
  displayedImageUrl: any;
  isImageChanged = false; // Add this property to track if the image has been changed
  currentImageUrl: string | null = null; // To store the existing image URL
  constructor(
    private _fb: FormBuilder,
    private _memberService: MemberService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) {}

  newMemberForm!: FormGroup;
  newUploadFile(event: any) {
    const file: File = event.target.files ? event.target.files[0] : null;
    // if (file) {
    this.file_arr = file;
    this.isImageChanged = true;
    // }
  }

  // onSave() {
  //   const id = this._activeRoute.snapshot.params['id'];

  //   if (id) {
  //     const formData = new FormData();
  //     formData.append(
  //       'fname',
  //       this.newMemberForm.get('memberDetail.fname')?.value
  //     );

  //     formData.append(
  //       'lname',
  //       this.newMemberForm.get('memberDetail.lname')?.value
  //     );
  //     // this line of code for using post method instead of put method
  //     formData.append('_method', 'PUT');

  //     if (this.isImageChanged) {
  //       formData.append('image', this.file_arr);
  //     }

  //     else if (this.currentImageUrl) {
  //       formData.append('image', this.currentImageUrl);
  //     }

  //     this._memberService.editMember(id, formData).subscribe({
  //       next: (res: any) => {
  //         alert('Updated');
  //         this._router.navigate(['/test/view-test']);
  //       },
  //       error: (err: any) => {
  //         console.error(err);
  //         alert('Error updating employee.');
  //       },
  //     });
  //   }

  //   else {
  //     const formData = new FormData();

  //     formData.append(
  //       'fname',
  //       this.newMemberForm.get('memberDetail.fname')?.value
  //     );

  //     formData.append(
  //       'lname',
  //       this.newMemberForm.get('memberDetail.lname')?.value
  //     );

  //     formData.append('image', this.file_arr);

  //     this._memberService.addMember(formData).subscribe({
  //       next: (res: any) => {
  //         alert('Member Added Successfully');
  //       },
  //       error: (err: any) => {
  //         if (err && err.error && err.error.errors) {
  //           const errorMessages = Object.values(err.error.errors).flat();
  //           const errorMessage = errorMessages.join('\n');
  //           console.log('error ' + err);
  //         } else {
  //           console.error(err);
  //           alert('An unknown error occurred.');
  //         }
  //       },
  //     });
  //   }
  // }

  onSave() {
    const id = this._activeRoute.snapshot.params['id'];
    const formData = this.createFormData();

    if (id) {
      formData.append('_method', 'PUT'); // for PUT method
      this._memberService.editMember(id, formData).subscribe({
        next: () => {
          alert('Updated');
          this._router.navigate(['/test/view-test']);
        },
        error: (err) => this.handleError(err, 'Error updating member.'),
      });
    } else {
      this._memberService.addMember(formData).subscribe({
        next: () => alert('Member Added Successfully'),
        error: (err) => this.handleError(err, 'An unknown error occurred.'),
      });
    }
  }

  createFormData() {
    const formData = new FormData();
    formData.append(
      'fname',
      this.newMemberForm.get('memberDetail.fname')?.value
    );
    formData.append(
      'lname',
      this.newMemberForm.get('memberDetail.lname')?.value
    );

    if (this.isImageChanged) formData.append('image', this.file_arr);
    else if (this.currentImageUrl)
      formData.append('image', this.currentImageUrl);

    return formData;
  }

  handleError(err: any, defaultErrorMsg: string) {
    console.error(err);
    if (err && err.error && err.error.errors) {
      const errorMessages = Object.values(err.error.errors).flat().join('\n');
      alert(errorMessages);
    } else {
      alert(defaultErrorMsg);
    }
  }
  // =========================================================
  getDataInEditForm() {
    const id = this._activeRoute.snapshot.params['id'];
    if (id) {
      this._memberService.getMemberById(id).subscribe({
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
          console.log(this.currentImageUrl);
        },
        error: (err: any) => {
          console.error(err);
          alert('Error fetching member data.');
        },
      });
    }
  }
  // =============================================================
  // getDataInEditForm() {
  //   const id = this._activeRoute.snapshot.params['id'];

  //   if (!id) return;

  //   this._memberService.getMemberById(id).subscribe(
  //     (res: any) => {
  //       const { fname, lname, image } = res.memberDetail;

  //       this.newMemberForm.patchValue({
  //         memberDetail: { fname, lname },
  //       });

  //       this.displayedImageUrl = this.currentImageUrl = image;
  //     },
  //     (err: any) => {
  //       console.error(err);
  //       alert('Error fetching member data.');
  //     }
  //   );
  // }
  ngOnInit(): void {
    this.newMemberForm = this._fb.group({
      memberDetail: this._fb.group({
        fname: [''],
        lname: [''],
        image: [null],
      }),
    });

    this.getDataInEditForm();
  }
}
