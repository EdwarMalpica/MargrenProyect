import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMailComponent } from './info-mail.component';

describe('InfoMailComponent', () => {
  let component: InfoMailComponent;
  let fixture: ComponentFixture<InfoMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
