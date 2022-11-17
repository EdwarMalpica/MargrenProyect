import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconNetworksComponent } from './icon-networks.component';

describe('IconFacebookComponent', () => {
  let component: IconNetworksComponent;
  let fixture: ComponentFixture<IconNetworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconNetworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
