import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
 // @Select(AppState.selectMenuList) menuItems$: any;

  constructor(private store: Store) {}
  ngOnInit(): void {
    // this.menuItems$.subscribe((returnData: any) => {
    //   console.log('menu Data',returnData);
    // });
  }

}
