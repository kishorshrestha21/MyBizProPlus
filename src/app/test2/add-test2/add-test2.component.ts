import { formatDate } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-add-test2',
  templateUrl: './add-test2.component.html',
  styleUrls: ['./add-test2.component.scss'],
})
export class AddTest2Component implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private _memberService: MemberService,
    private cdRef: ChangeDetectorRef
  ) {}

  newMemberForm2!: FormGroup;

  displayedImageUrl: any;
  file_arr: any;
  newMembers: any[] = [];
  isImageChanged = false; // Add this property to track if the image has been changed
  currentImageUrl: string | null = null; // To store the existing image URL

  newUploadFile(event: any) {
    const file: File = event.target.files ? event.target.files[0] : null;
    this.file_arr = file;
    this.isImageChanged = true;
  }

  createFormData() {
    const formData = new FormData();
    formData.append(
      'fname',
      this.newMemberForm2.get('memberDetail.fname')?.value
    );
    formData.append(
      'lname',
      this.newMemberForm2.get('memberDetail.lname')?.value
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

  onSave() {
    const formData = this.createFormData();
    this._memberService.addMember(formData).subscribe({
      next: (res) => alert('Member Added Successfully'),
      error: (err) => this.handleError(err, 'An unknown error occurred.'),
    });
  }

  newmemberForm2() {
    this.newMemberForm2 = this._fb.group({
      memberDetail: this._fb.group({
        fname: [''],
        lname: [''],
        image: [null],
      }),
    });
  }

  ngOnInit(): void {
    this.newmemberForm2();
  }
}
