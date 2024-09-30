import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { RestroList } from 'src/app/model/RestroList';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  restaurantDetails: RestroList[] = [];

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.fetchRestaurantDetails();
  }

  fetchRestaurantDetails() {
    this.backendService.getRestaurants().subscribe(
      (data: RestroList[]) => {
        this.restaurantDetails = data;
      },
      (error) => {
        console.error('Error fetching restaurant details', error);
      }
    );
  }

  deleteRestaurant(id: number) {
    this.backendService.deleteRestaurant(id).subscribe(
      (response: string) => { 
        console.log('Delete response:', response);
        this.restaurantDetails = this.restaurantDetails.filter(restaurant => restaurant.id !== id);
      },
      (error) => {
        console.error('Error deleting restaurant', error);
      }
    );
  }
}
