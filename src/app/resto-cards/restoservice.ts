import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CDN_URL, LOGO_URL, MENU_API } from 'src/constants';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }
  public getResCards(){
    return LOGO_URL
  }

}
