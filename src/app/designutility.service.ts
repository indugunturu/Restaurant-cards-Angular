import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor(private http:HttpClient) { }

  fetchUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  addUsers(userData:any){
    return this.http.post('https://jsonplaceholder.typicode.com/users',userData);
  }

  deleteUser(id:number){
    return this.http.delete('https://jsonplaceholder.typicode.com/users/'+id);
  }

  updateUser(payload:any,id:number){
    return this.http.put('https://jsonplaceholder.typicode.com/users/'+id, payload);
  }

  getRestaurentMenu(id: number) {
    return this.http.get('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId='+id);
  }
}
