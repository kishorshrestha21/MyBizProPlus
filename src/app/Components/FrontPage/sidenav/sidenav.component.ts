import { Component } from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  searchText: any;
  menus = [
    {
      icon: 'home',
      name: 'Dashboard',
      link: '/dashboard',
    },

    {
      icon: 'people',
      name: 'Customer',
      link: '/customer',
    },

    {
      icon: 'category',
      name: 'Designation',
      link: '/designation',
    },

    {
      icon: 'people',
      name: 'Employee',
      link: '/employee',
    },
    {
      icon: 'shopping_cart',
      name: 'Purchase',
      link: '/purchase',
    },

    {
      icon: 'settings',
      name: 'Settings',
      link: 'setting',
    },

    {
      icon: 'people',
      name: 'Test',
      link: '/test',
    },

    {
      icon: 'people',
      name: 'Test2',
      link: '/test2',
    },
  ];
  active: any;
}
