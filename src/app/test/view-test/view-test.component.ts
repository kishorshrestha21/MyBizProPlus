import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberService } from 'src/app/Services/member.service';
import { test } from 'src/app/_interface/dataType';

@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.scss'],
})
export class ViewTestComponent implements OnInit, OnDestroy {
  constructor(
    private _memberService: MemberService,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) {}

  newMembers: test[] = [];
  memberSub: any;
  getTestData() {
    this.memberSub = this._memberService.getMember().subscribe({
      next: (res: test[]) => {
        this.newMembers = res;
      },
    });
  }

  navigateToAddEmployee(id: number) {
    this._router.navigate(['/test/add-test', id]);
  }

  deletEmployeeById(id: number) {
    this._memberService.deleteMember(id).subscribe({
      next: (res) => {
        alert('deleted');
        this.getTestData();
      },
      error: console.log,
    });
  }

  ngOnInit(): void {
    this.getTestData();
  }

  ngOnDestroy(): void {
    this.memberSub.unsubscribe();
  }
}
