import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit, OnDestroy {
  constructor(private _headerService: HeaderService) {}
  isSetting = true;
  // onSeting() {
  //   this.isSetting = false;
  // }

  onBack() {
    this.isSetting = true;
  }
  settingLists = [
    {
      name: 'brand',
      linkText: 'brand',
      link: 'brand',
      icon: 'label',
      isSetting: false,
    },
    {
      name: 'card',
      linkText: 'card',
      link: 'card',
      icon: 'credit_card',
    },
    {
      name: 'pincode',
      linkText: 'pass code',
      link: 'passcode',
      icon: 'blur_on',
    },
    {
      name: 'reward',
      linkText: 'reward',
      link: 'reward',
      icon: 'attach_money',
    },
    {
      name: 'size',
      linkText: 'size',
      link: 'size',
      icon: 'exposure',
    },
    {
      name: 'tax',
      linkText: 'tax',
      link: 'tax',
      icon: 'add_to_photos',
    },
    {
      name: 'unit',
      linkText: 'unit',
      link: 'unit',
      icon: 'layers',
    },
  ];

  ngOnInit(): void {
    this._headerService.headerTitle.next('Settings');
    this.isSetting = true;
  }
  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
    this.isSetting = false;
  }
}
