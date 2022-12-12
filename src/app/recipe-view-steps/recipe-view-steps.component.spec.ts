import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeViewStepsComponent } from './recipe-view-steps.component';

describe('RecipeViewStepsComponent', () => {
  let component: RecipeViewStepsComponent;
  let fixture: ComponentFixture<RecipeViewStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeViewStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeViewStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
