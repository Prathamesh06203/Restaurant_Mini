import { Injectable } from '@angular/core';
import { RestaurantRequest } from '../model/RestaurantRequest';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestroList } from '../model/RestroList';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = 'https://5fef-2409-40c2-2046-90db-e98c-3094-383e-d17a.ngrok-free.app';

  constructor(private http: HttpClient) { }

  onboardingRestaurant(restaurantRequest: RestaurantRequest): Observable<any> {
    console.log(restaurantRequest);
    return this.http.post(`${this.baseUrl}/restro/addNew`, restaurantRequest, {
      responseType: 'json'
    });
  }

  getRestaurants(): Observable<RestroList[]> {
    return this.http.get<RestroList[]>(`${this.baseUrl}/restro/allRestro`, {
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true'
      })
    });
  }
  
  registerUser(user: any): Observable<any> {
    console.log('Register User Payload:', user); 
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
