import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-view-setting',
  templateUrl: './view-setting.component.html',
  styleUrls: ['./view-setting.component.scss'],
})
export class ViewSettingComponent implements OnInit, OnDestroy {
  constructor(private _headerService: HeaderService) {}

  settingLists = [
    {
      name: 'brand',
      linkText: 'brand',
      link: 'brand',
      icon: 'label',
    },
    {
      name: 'card',
      linkText: 'card',
      link: '/card',
      icon: 'credit_card',
    },
    {
      name: 'pincode',
      linkText: 'pass code',
      link: '/passcode',
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
      link: '/size',
      icon: 'exposure',
    },
    {
      name: 'tax',
      linkText: 'tax',
      link: '/tax',
      icon: 'add_to_photos',
    },
    {
      name: 'unit',
      linkText: 'unit',
      link: '/unit',
      icon: 'layers',
    },
    {
      name: 'view setting',
      linkText: 'view setting',
      link: 'view-setting',
      icon: 'label',
    },
  ];

  ngOnInit(): void {
    this._headerService.headerTitle.next('Settings');
  }
  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
  }
}
