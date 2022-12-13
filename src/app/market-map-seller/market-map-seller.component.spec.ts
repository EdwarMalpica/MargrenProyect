import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketMapSellerComponent } from './market-map-seller.component';

describe('MarketMapSellerComponent', () => {
  let component: MarketMapSellerComponent;
  let fixture: ComponentFixture<MarketMapSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketMapSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketMapSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
