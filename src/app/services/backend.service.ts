import { Injectable } from '@angular/core';
import { RestaurantRequest } from '../model/RestaurantRequest';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http : HttpClient) { }

  onboardingRestaurant(restaurantRequest : RestaurantRequest){
      console.log(restaurantRequest);

      this.http.post("https//f36b-152-58-20-172.ngrok-free.app/restro/addNew",restaurantRequest,{
        responseType: 'text'
      })
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) =>{
          console.log(error);
        }
      })
  }
}
