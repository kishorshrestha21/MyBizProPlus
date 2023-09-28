import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-id-test',
  templateUrl: './id-test.component.html',
  styleUrls: ['./id-test.component.scss'],
})
export class IdTestComponent implements OnInit {
  constructor(
    private _memberService: MemberService,
    private _activeRoute: ActivatedRoute
  ) {}

  newMemberByIds: any[] = [];

  getDataInEditForm() {
    const id = this._activeRoute.snapshot.params['abc'];
    // if (id) {
    this._memberService.getMemberById(id).subscribe({
      next: (res: any) => {
        this.newMemberByIds = [res];
        console.log(this.newMemberByIds);
      },
      error: (err: any) => {
        console.error(err);
        alert('Error fetching member data.');
      },
    });
    // }
  }

  ngOnInit(): void {
    this.getDataInEditForm();
  }
}
