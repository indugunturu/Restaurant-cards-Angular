import { Component } from '@angular/core';
import { CDN_URL, MENU_API } from '../../constants'
import { ApiService } from './restoservice';
@Component({
  selector: 'app-resto-cards',
  templateUrl: './resto-cards.component.html',
  styleUrls: ['./resto-cards.component.scss']
})
export class RestoCardsComponent {
  y: any;
  data: any;
  imgage: any
  constructor( private apiService: ApiService) {
    this.fetchData();
  }
  // getValue() {
  //   this.y = this.apiService.getResCards();
  //   console.log(this.y);
    //  fetchData = async () => {
    //   const data = await fetch(MENU_API+ 87869);
    //   const json = await data.json();
    // console.log(json.data);
    // };

     fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      this.data = json?.data?.cards[2]?.data?.data?.cards;
      console.log(CDN_URL + this.data[0].data.cloudinaryImageId);
      this.imgage = CDN_URL + this.data[0].data.cloudinaryImageId;
      // // Optional Chaining
      // setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
      // setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    };
//  };
clicked(event: any, data: any){

console.log(data);
}
}
