import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTeamComponent } from './image-team.component';

describe('ImageTeamComponent', () => {
  let component: ImageTeamComponent;
  let fixture: ComponentFixture<ImageTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
