import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipeDocumentComponent } from './tipe-document.component';

describe('TipeDocumentComponent', () => {
  let component: TipeDocumentComponent;
  let fixture: ComponentFixture<TipeDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipeDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipeDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
