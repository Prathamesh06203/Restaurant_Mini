import { Component, OnInit } from '@angular/core';
import { RestaurantRequest } from 'src/app/models/RestaurantRequest';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.scss']
})
export class ListRestoComponent implements OnInit {
  restaurantDetails: RestaurantRequest[] = [
    {
      name: 'Tuskers - Veg Dining',
      owner: 'John Doe',
      type: 'Vegetarian',
      addressDetails: { streetName: 'MG Road', city: 'Mumbai', pinCode: 400001 },
      street: 'MG Road',
      city: 'Mumbai',
      zipCode: 400001,
      phone: 1234567890,
      email: 'tuskers@mumbai.com'
    },
    {
      name: 'Fiona',
      owner: 'Jane Smith',
      type: 'Italian',
      addressDetails: { streetName: 'Park streetName', city: 'Kolkata', pinCode: 700016 },
      street: 'Park streetName',
      city: 'Kolkata',
      zipCode: 700016,
      phone: 9876543210,
      email: 'fiona@kolkata.com'
    },
    {
      name: 'Koji',
      owner: 'Kenji Tanaka',
      type: 'Japanese',
      addressDetails: { streetName: 'Shibuya Lane', city: 'Tokyo', pinCode: 1500001 },
      street: 'Shibuya Lane',
      city: 'Tokyo',
      zipCode: 1500001,
      phone: 1122334455,
      email: 'koji@tokyo.com'
    },
    {
      name: 'The Spice Club',
      owner: 'Aarav Mehta',
      type: 'Indian',
      addressDetails: { streetName: 'MG Road', city: 'Pune', pinCode: 411001 },
      street: 'MG Road',
      city: 'Pune',
      zipCode: 411001,
      phone: 9988776655,
      email: 'spiceclub@pune.com'
    },
    {
      name: 'Ocean Breeze',
      owner: 'Sarah Connor',
      type: 'Seafood',
      addressDetails: { streetName: 'Beachside Blvd', city: 'Goa', pinCode: 403001 },
      street: 'Beachside Blvd',
      city: 'Goa',
      zipCode: 403001,
      phone: 5566778899,
      email: 'oceanbreeze@goa.com'
    },
    {
      name: 'Grill House',
      owner: 'Tom Hardy',
      type: 'Barbecue',
      addressDetails: { streetName: 'Downtown Lane', city: 'Bangalore', pinCode: 560001 },
      street: 'Downtown Lane',
      city: 'Bangalore',
      zipCode: 560001,
      phone: 8899776655,
      email: 'grillhouse@bangalore.com'
    },
    {
      name: 'Le Petit Chef',
      owner: 'Marie Curie',
      type: 'French',
      addressDetails: { streetName: 'Eiffel streetName', city: 'Paris', pinCode: 75001 },
      street: 'Eiffel streetName',
      city: 'Paris',
      zipCode: 75001,
      phone: 3344556677,
      email: 'lepetitchef@paris.com'
    },
    {
      name: 'Panda Express',
      owner: 'Wang Li',
      type: 'Chinese',
      addressDetails: { streetName: 'Great Wall Avenue', city: 'Beijing', pinCode: 100001 },
      street: 'Great Wall Avenue',
      city: 'Beijing',
      zipCode: 100001,
      phone: 7788990011,
      email: 'pandaexpress@beijing.com'
    },
    {
      name: 'Casa Mexicana',
      owner: 'Carlos Gonzalez',
      type: 'Mexican',
      addressDetails: { streetName: 'Fiesta streetName', city: 'Mexico City', pinCode: 11000 },
      street: 'Fiesta streetName',
      city: 'Mexico City',
      zipCode: 11000,
      phone: 6677889900,
      email: 'casamexicana@mexico.com'
    },
    {
      name: 'Royal Tandoor',
      owner: 'Raj Kapoor',
      type: 'Mughlai',
      addressDetails: { streetName: 'Chowk Bazaar', city: 'Delhi', pinCode: 110006 },
      street: 'Chowk Bazaar',
      city: 'Delhi',
      zipCode: 110006,
      phone: 9988665544,
      email: 'royaltandoor@delhi.com'
    }
  ];
  

  constructor() {}

  ngOnInit() {}

  getImageUrl(restaurant: RestaurantRequest): string {
    const images: { [key: string]: string } = {
      'Tuskers - Veg Dining': '../../../../../assets/tuskers.jpeg',
      'Fiona': '../../../../../assets/fiona.jpeg',
      'Koji': '../../../../../assets/koji.jpeg',
      'The Spice Club': '../../../../../assets/koji.jpeg',
      'Ocean Breeze': '../../../../../assets/fiona.jpeg',
      'Grill House': '../../../../../assets/tuskers.jpeg',
      'Le Petit Chef': '../../../../../assets/tuskers.jpeg',
      'Panda Express': '../../../../../assets/fiona.jpeg',
      'Casa Mexicana': '../../../../../assets/koji.jpeg',
      'Royal Tandoor': '../../../../../assets/koji.jpeg'
    };
    return images[restaurant.name] || '../../../../../assets/bgidk.jpg';
  }
  
}
