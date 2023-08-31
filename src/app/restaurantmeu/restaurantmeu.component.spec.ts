import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantmeuComponent } from './restaurantmeu.component';

describe('RestaurantmeuComponent', () => {
  let component: RestaurantmeuComponent;
  let fixture: ComponentFixture<RestaurantmeuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantmeuComponent]
    });
    fixture = TestBed.createComponent(RestaurantmeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
