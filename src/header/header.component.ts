import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  products: any = [];
  @Select(AppState.selectMenuList) menuItems$: any;

 constructor(private store: Store) {}
 ngOnInit(): void {
   this.menuItems$.subscribe((returnData: any) => {
     console.log('menu Data',returnData);
   const returnItem =  Object.keys(returnData);
     this.products = returnItem.length;
   });
 }
}
