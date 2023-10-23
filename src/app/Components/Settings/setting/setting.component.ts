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
      icon: 'branding_watermark',
    },
    {
      name: 'card',
      linkText: 'card',
      link: '/card',
    },
    {
      name: 'pass code',
      linkText: 'pass code',
      link: 'pass-code',
    },
    {
      name: 'reward',
      linkText: 'reward',
      link: 'reward',
    },
    {
      name: 'size',
      linkText: 'size',
      link: 'size',
    },
    {
      name: 'tax',
      linkText: 'tax',
      link: 'tax',
    },
    {
      name: 'unit',
      linkText: 'unit',
      link: 'unit',
      icon: '',
    },
  ];

  ngOnInit(): void {
    this._headerService.headerTitle.next('Settings');
  }
  ngOnDestroy(): void {
    this._headerService.headerTitle.next('');
  }
}
