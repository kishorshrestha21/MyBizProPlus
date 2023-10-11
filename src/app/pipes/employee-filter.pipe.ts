import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFilter',
})
export class EmployeeFilterPipe implements PipeTransform {
  transform(employees: any[], searchText: any): any[] {
    if (!employees) return [];
    if (!searchText) return employees;

    searchText = searchText.toLowerCase();
    return employees.filter((employee: any) => {
      if (!employee.employeeDetail) return false;
      let firstnameMatch = employee.employeeDetail.firstname
        ? employee.employeeDetail.firstname.toLowerCase().includes(searchText)
        : false;
      let lastnameMatch = employee.employeeDetail.lastname
        ? employee.employeeDetail.lastname.toLowerCase().includes(searchText)
        : false;
      return firstnameMatch || lastnameMatch;
    });
  }
}
