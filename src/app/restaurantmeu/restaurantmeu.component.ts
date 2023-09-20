import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AppState } from '../state/app.state';
import { Observable } from 'rxjs';
import { MenuList, RestaurantMenu } from '../actions/app.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurantmeu',
  templateUrl: './restaurantmeu.component.html',
  styleUrls: ['./restaurantmeu.component.scss'],
})
export class RestaurantmeuComponent implements OnInit {
  cuisines: any;
  resName: string = '';
  data: any;
  categories: any;
  menuLust: any;
  display = false;
  @Select(AppState.selectResMenuData) menuInfo$: any;
  @Select(AppState.selectMenuList) menuItems$: any;
  // @Select(AppState => AppState.selectResMenuData) menuInfo$: Observable<any>;
  constructor(private store: Store, private router: Router) {}
  ngOnInit(): void {
    this.menuInfo$.subscribe((returnData: any) => {
      this.cuisines = returnData?.data?.cards[0]?.card?.card?.info?.cuisines;
      this.resName = returnData?.data?.cards[0]?.card?.card?.info?.name;
      console.log(returnData?.data?.cards[0]?.card?.card?.info?.cuisines);
      this.categories =
        returnData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c: any) =>
            c.card?.['card']?.['@type'] ===
            'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        );
      console.log(this.categories);
      if (!!this.categories && this.categories.length > 0) {
        this.categories.map(
          (category: any, index: number) =>
            // controlled component
            // key=category?.card?.card.title;
            (this.data = category?.card?.card)
          // showItems={index === showIndex ? true : false}
          // setShowIndex={() => setShowIndex(index)}
          // dummy={dummy}
        );
        if (!!this.categories && this.categories.length > 0) {
          this.categories.forEach((_covenants: any) => {
            _covenants.isExpanded = _covenants.isExpanded;
          });
        }
      }
      console.log('data', this.data);
    });
  //   if (!!this.categories && this.categories.length > 0) {
  //   this.menuLust = this.categories.card.card.itemCards;

  //   this.categories.forEach((_covenants: any) => {
  //     _covenants.isExpanded = _covenants.isExpanded;
  //   });
  // }
    // this.menuItems$.subscribe((menuList: any) => {
    //   console.log('menu list', menuList);
    //   this.menuLust = menuList;
    //   if (!!this.categories && this.categories.length > 0) {
    //     this.categories.forEach((_covenants: any) => {
    //       _covenants.isExpanded = false;
    //     });
    //   }
    // });
    // if (!!this.categories && this.categories.length > 0) {
    //   this.categories.forEach((_covenants: any) => {
    //     _covenants.isExpanded = false;
    //   });
    // }
  }

  onMenuClicked(event: Event, list: any, isExpanded: boolean) {
    console.log(event);
    console.log(list);
    this.menuLust = list;
    if (!!this.categories && this.categories.length > 0) {
      this.categories.forEach((_covenants: any) => {
        _covenants.isExpanded = _covenants.isExpanded;
      });
    }
    this.display = true;
  }
  addItemsToCart(item: any) {
    this.store.dispatch(new MenuList(item));
  }
}
