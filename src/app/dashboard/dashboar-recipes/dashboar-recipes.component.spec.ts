import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarRecipesComponent } from './dashboar-recipes.component';

describe('DashboarRecipesComponent', () => {
  let component: DashboarRecipesComponent;
  let fixture: ComponentFixture<DashboarRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboarRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboarRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
