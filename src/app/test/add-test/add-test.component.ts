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
  file_arr: any; // Variable to store uploaded files
  newMembers: any[] = []; // Array to store new members (not used in the provided code)
  displayedImageUrl: any; // URL of the image to be displayed in the component

  // Boolean to determine if the user has changed the image
  isImageChanged = false;

  // Stores the existing image URL for the member
  currentImageUrl: string | null = null;

  constructor(
    private _fb: FormBuilder, // Service to build reactive forms
    private _memberService: MemberService, // Service to interact with members
    private _router: Router, // Angular's Router service
    private _activeRoute: ActivatedRoute, // Information about the active route
    private cdRef: ChangeDetectorRef // Service to interact with change detection
  ) {}

  newMemberForm!: FormGroup; // The form structure for adding/editing members

  // Method triggered when a file is selected
  newUploadFile(event: any) {
    const file: File = event.target.files ? event.target.files[0] : null;
    this.file_arr = file; // Store the file
    this.isImageChanged = true; // Mark that the image has changed
  }

  /* Previous implementation of the onSave method.
     Separated code for adding and editing members and had some repetitions. */
  /*
  onSave() {
    ...
  }
  */

  // Method to handle saving, either adding a new member or updating an existing one
  onSave() {
    const id = this._activeRoute.snapshot.params['id']; // Get the id from the route
    const formData = this.createFormData(); // Generate form data for the API call

    if (id) {
      // If id exists, we are updating a member
      formData.append('_method', 'PUT');
      this._memberService.editMember(id, formData).subscribe({
        next: () => {
          alert('Updated');
          this._router.navigate(['/test/view-test']); // Navigate to view after update
        },
        error: (err) => this.handleError(err, 'Error updating member.'),
      });
    } else {
      // If id doesn't exist, we are adding a new member
      this._memberService.addMember(formData).subscribe({
        next: () => alert('Member Added Successfully'),
        error: (err) => this.handleError(err, 'An unknown error occurred.'),
      });
    }
  }

  // Utility method to create the FormData object for API calls
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

  // Method to handle errors from API calls
  handleError(err: any, defaultErrorMsg: string) {
    console.error(err);
    if (err && err.error && err.error.errors) {
      const errorMessages = Object.values(err.error.errors).flat().join('\n');
      alert(errorMessages);
    } else {
      alert(defaultErrorMsg);
    }
  }

  // Fetches the data for editing a member
  getDataInEditForm() {
    const id = this._activeRoute.snapshot.params['id'];
    if (id) {
      // If id exists, fetch member data for editing
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
        },
        error: (err: any) => {
          console.error(err);
          alert('Error fetching member data.');
        },
      });
    }
  }

  // Initialize the form and fetch data if in edit mode
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
