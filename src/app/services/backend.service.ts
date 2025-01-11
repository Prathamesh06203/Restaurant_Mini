import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestaurantRequest } from "../models/RestaurantRequest";
import { HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private baseUrl = 'http://localhost:8080/restro'; 

  constructor(private http: HttpClient) {}

  onboardRestaurant(restaurantRequest: RestaurantRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/addNew`, restaurantRequest, {
      responseType: 'text',
    });
  }

  getAll(): Observable<RestaurantRequest[]> {
    return this.http.get<RestaurantRequest[]>(`${this.baseUrl}/addNew`, {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true', 
      }),
    });
  }
}

