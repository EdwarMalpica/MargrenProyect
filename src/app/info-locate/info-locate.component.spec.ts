import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLocateComponent } from './info-locate.component';

describe('InfoLocateComponent', () => {
  let component: InfoLocateComponent;
  let fixture: ComponentFixture<InfoLocateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoLocateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoLocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
