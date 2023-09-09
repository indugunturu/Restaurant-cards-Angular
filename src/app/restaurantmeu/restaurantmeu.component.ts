import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AppState } from '../state/app.state';
import { RestaurantMenu } from '../actions/app.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restaurantmeu',
  templateUrl: './restaurantmeu.component.html',
  styleUrls: ['./restaurantmeu.component.scss'],
})
export class RestaurantmeuComponent implements OnInit {
  cuisines: any;
  resName: string = '';
  @Select(AppState.selectResMenuData) menuInfo$: any;
  // @Select(AppState => AppState.selectResMenuData) menuInfo$: Observable<any>;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.menuInfo$.subscribe((returnData: any) => {
      this.cuisines = returnData?.data?.cards[0]?.card?.card?.info?.cuisines;
      this.resName = returnData?.data?.cards[0]?.card?.card?.info?.name;
      console.log(returnData?.data?.cards[0]?.card?.card?.info?.cuisines);
      const categories =  returnData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c:any) =>
          c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
      console.log(categories);
    });

  }
}
