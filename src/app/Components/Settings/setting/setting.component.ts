import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit, OnDestroy {
  constructor(private _headerService: HeaderService) {}

  settingLists = [
    {
      name: 'brand',
      linkText: 'brand',
      link: '/brand',
      icon: 'label',
    },
    {
      name: 'card',
      linkText: 'card',
      link: '/card',
      icon: 'payment',
    },
    {
      name: 'pass code',
      linkText: 'pass code',
      link: '/passcode',
      icon: 'blur_on',
    },
    {
      name: 'reward',
      linkText: 'reward',
      link: 'reward',
      icon: 'add_to_photos',
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
      icon: 'attach_money',
    },
    {
      name: 'unit',
      linkText: 'unit',
      link: '/unit',
      icon: 'layers',
    },
  ];

  ngOnInit(): void {
    this._headerService.headerTitle.next('Settings');
  }
  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
  }
}
