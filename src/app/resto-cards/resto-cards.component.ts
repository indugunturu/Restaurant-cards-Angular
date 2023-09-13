import { Component, ViewChild } from '@angular/core';
import { CDN_URL, MENU_API } from '../../constants';
import { ApiService } from './restoservice';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { RestaurantMenu } from '../actions/app.actions';
import { ShimmerComponent } from '../shimmer/shimmer.component';
@Component({
  selector: 'app-resto-cards',
  templateUrl: './resto-cards.component.html',
  styleUrls: ['./resto-cards.component.scss'],
})
export class RestoCardsComponent {
  y: any;
  data: any;
  imgage: any;
  @ViewChild('filter') inputs: any; // accessing the reference element
  constructor(
    private apiService: ApiService,
    private store: Store,
    private router: Router
  ) {
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
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();
    this.data =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      const categories =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c:any) =>
          c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
      console.log(categories);
    // const link = !!this.data?.this.data[0]?.info.cta.link;
    // console.log(CDN_URL + this.data[0].data.cloudinaryImageId);
    // this.imgage = CDN_URL + this.data[0].data.cloudinaryImageId;
    // // Optional Chaining
    // setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
    // setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    console.log(
      'imageeeeeeeee',
      CDN_URL + this.data[0]?.info?.cloudinaryImageId
    );
  };
  //  };
  clicked(event: any, data: any) {
    console.log(data);
  }
  filterResults(text: string) {
    if (!text) {
      this.data = this.data;
    }
    this.data = this.data.filter((filtered: any) =>
      filtered?.info.name.toLowerCase().includes(text.toLowerCase())
    );
  }
  fetchResData = async (id: string) => {
    const data = await fetch(MENU_API + id);
    const json = await data.json();
    this.store.dispatch(new RestaurantMenu(id));
    this.router.navigate(['/restaurants', id]);
  };
  onClicked(event: Event, id: string) {
    console.log(id);
    const resData = this.fetchResData(id);
    console.log(resData);
  }
  clearFilter() {
    this.inputs.nativeElement.value = ' ';
    this.fetchData();
  }
}
