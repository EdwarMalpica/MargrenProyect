import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomInteractiveComponent } from './buttom-interactive.component';

describe('ButtomInteractiveComponent', () => {
  let component: ButtomInteractiveComponent;
  let fixture: ComponentFixture<ButtomInteractiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtomInteractiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtomInteractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
