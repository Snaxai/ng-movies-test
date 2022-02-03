export interface IUser {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  address: IUserAddress;
  active: number;
  createdAt: number;
  lastLogin: number;
}

export interface IUserAddress {
  street1: string;
  street2: string;
  country: string;
  postalCode: string;
}
