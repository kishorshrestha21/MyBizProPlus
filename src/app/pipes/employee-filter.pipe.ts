import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFilter',
})
// export class EmployeeFilterPipe implements PipeTransform {
//   transform(employees: any[], searchText: any): any[] {
//     if (!employees) return [];
//     if (!searchText) return employees;

//     searchText = searchText.toLowerCase();
//     return employees.filter((employee: any) => {
//       if (!employee.employeeDetail) return false;
//       let firstnameMatch = employee.employeeDetail.firstname
//         ? employee.employeeDetail.firstname.toLowerCase().includes(searchText)
//         : false;

//       let lastnameMatch = employee.employeeDetail.lastname
//         ? employee.employeeDetail.lastname.toLowerCase().includes(searchText)
//         : false;

//       let emailMatch = employee.employeeDetail.email
//         ? employee.employeeDetail.email.toLowerCase().includes(searchText)
//         : false;

//       let phoneMatch = employee.employeeDetail.phone
//         ? employee.employeeDetail.phone.toString().includes(searchText)
//         : false;

//       let middlenameMatch = employee.employeeDetail.middlename
//         ? employee.employeeDetail.middlename.toLowerCase().includes(searchText)
//         : false;

//       let idMatch = employee.id
//         ? employee.id.toString().includes(searchText)
//         : false;

//       return (
//         firstnameMatch ||
//         lastnameMatch ||
//         emailMatch ||
//         phoneMatch ||
//         middlenameMatch ||
//         idMatch
//       );
//     });
//   }
// }

// this is search start with twqo letters
// export class EmployeeFilterPipe implements PipeTransform {
//   transform(employees: any[], searchText: any): any[] {
//     if (!employees) return [];
//     if (!searchText) return employees;

//     searchText = searchText.toLowerCase();

//     return employees.filter((employee: any) => {
//       const fieldsToCheck = [
//         employee?.employeeDetail?.firstname,
//         employee?.employeeDetail?.lastname,
//         employee?.employeeDetail?.email,
//         employee?.employeeDetail?.phone?.toString(),
//         employee?.employeeDetail?.middlename,
//         employee?.id?.toString(),
//       ];

//       // Returns true if at least one field matches the search text
//       return fieldsToCheck.some((field) =>
//         field?.toLowerCase().includes(searchText)
//       );
//     });
//   }
// }
export class EmployeeFilterPipe implements PipeTransform {
  transform(employees: any[], searchText: any): any[] {
    if (!employees) return [];
    if (!searchText) return employees;

    searchText = searchText.toLowerCase();

    return employees.filter((employee: any) => {
      const fieldsToCheck = [
        employee?.employeeDetail?.firstname,
        employee?.employeeDetail?.lastname,
        employee?.employeeDetail?.email,
        employee?.employeeDetail?.phone?.toString(),
        employee?.employeeDetail?.middlename,
        employee?.id?.toString(),
      ];

      // Returns true if at least one field starts with the search text
      return fieldsToCheck.some((field) =>
        field?.toLowerCase().startsWith(searchText)
      );
    });
  }
}
