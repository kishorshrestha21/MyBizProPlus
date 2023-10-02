// Employee==========
export interface employee {
  employeeDetail: any;
  id: number;
  firstname: string;
  middlename?: string;
  lastname: string;
  email: string;
  phone: string;
  geneder: string;
  address: string;
  appartment?: string;
  city: string;
  zipCode: number;
  designation: string;
  level: string;
  photo: string;
  idCard: string;
  password: string;
  confirmPassword: string;
  eFirstName: string;
  eLastName: string;
  ePhoneNo: number;
  eRelation: string;
}

export interface test {
  id: number;
  memberDetail: {
    fname: string;
    lname: string;
    image: File;
  };
}
