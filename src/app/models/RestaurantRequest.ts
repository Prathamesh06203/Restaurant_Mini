import { AddressDetails } from './address';

export class RestaurantRequest {

        name: string = '';
        owner: string = '';
        type: string = '';
        addressDetails: AddressDetails = new AddressDetails();
        street: string = '';
        city: string = '';
        zipCode: number = 0;
        phone: number = 0;
        email: string = '';
    }