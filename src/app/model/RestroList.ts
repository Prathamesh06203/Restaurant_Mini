export class AddressDetails {
  id: number = 0;
  streetName: string = '';
  city: string = '';
  pinCode: string = '';
}

export class RestroList {
  id: number = 0;
  restroName: string = '';
  ownerName: string = '';
  addressDetails: AddressDetails = new AddressDetails();
  restroType: string = '';
  contact: string = '';
}
