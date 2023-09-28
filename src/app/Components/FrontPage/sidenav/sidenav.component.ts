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
      icon: 'person_2',
      name: 'Designation',
      link: '/designation',
    },

    {
      icon: 'people',
      name: 'Employee',
      link: '/employee',
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
