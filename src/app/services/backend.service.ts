import { Injectable } from '@angular/core';
import { RestaurantRequest } from '../model/RestaurantRequest';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestroList } from '../model/RestroList';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = '192.168.1.35:8080';

  constructor(private http: HttpClient) { }

  onboardingRestaurant(restaurantRequest: RestaurantRequest): Observable<any> {
    console.log(restaurantRequest);
    return this.http.post(`${this.baseUrl}/addNew`, restaurantRequest, {
      responseType: 'json'
    });
  }

  getRestaurants(): Observable<RestroList[]> {
    return this.http.get<RestroList[]>(`${this.baseUrl}/allRestro`, {
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true'
      })
    });
  }
  
  registerUser(user: any): Observable<any> {
    console.log('Register User Payload:', user); 
    return this.http.post(`${this.baseUrl}/register`, user, {
      responseType: 'json'
    });
  }
  
  deleteRestaurant(id: number): Observable<any> {
    return this.http.request('delete', `${this.baseUrl}/delete`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true"
      }),
      body: { id },
      responseType: 'text' 
    });
  }

  login(loginData: { userName: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, loginData);
  }
}
