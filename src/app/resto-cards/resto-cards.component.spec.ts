import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoCardsComponent } from './resto-cards.component';

describe('RestoCardsComponent', () => {
  let component: RestoCardsComponent;
  let fixture: ComponentFixture<RestoCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestoCardsComponent]
    });
    fixture = TestBed.createComponent(RestoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
