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
export class RestaurantmeuComponent implements OnInit,AfterViewInit {
  userInfo: any;
  @Select(AppState.selectResMenuData) menuInfo$: any;
  // @Select(AppState => AppState.selectResMenuData) menuInfo$: Observable<any>;
  constructor(private store: Store) {}
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.menuInfo$.subscribe((returnData: any) => {
      this.userInfo = returnData;
      console.log(returnData);
    });
  }
}
