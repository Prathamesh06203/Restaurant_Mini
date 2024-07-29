import { Injectable } from '@angular/core';
import { RestaurantRequest } from '../model/RestaurantRequest';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseUrl = 'https://c984-2409-40c2-2058-17bf-ac3e-5976-3260-2311.ngrok-free.app';

  constructor(private http: HttpClient) { }

  onboardingRestaurant(restaurantRequest: RestaurantRequest): Observable<any> {
    console.log(restaurantRequest);
    return this.http.post(`${this.baseUrl}/restro/addNew`, restaurantRequest, {
      responseType: 'json'
    });
  }

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/register`, user, {
      responseType: 'json'
    });
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/login`, credentials, {
      responseType: 'json'
    });
  }
}
