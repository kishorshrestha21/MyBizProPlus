import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor() {}

  headerActive = new BehaviorSubject(false);
  headerTitle = new BehaviorSubject('');
  linkBtn = new BehaviorSubject('');
  linkBtnText = new BehaviorSubject('');
}
