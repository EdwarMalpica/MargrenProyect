import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConsumidorComponent } from './dashboard-consumidor.component';

describe('DashboardConsumidorComponent', () => {
  let component: DashboardConsumidorComponent;
  let fixture: ComponentFixture<DashboardConsumidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardConsumidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
