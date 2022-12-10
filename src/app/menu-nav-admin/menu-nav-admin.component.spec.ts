import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavAdminComponent } from './menu-nav-admin.component';

describe('MenuNavAdminComponent', () => {
  let component: MenuNavAdminComponent;
  let fixture: ComponentFixture<MenuNavAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNavAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNavAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
