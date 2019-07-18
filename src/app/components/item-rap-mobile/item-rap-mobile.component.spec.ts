import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRapMobileComponent } from './item-rap-mobile.component';

describe('HeThongRapComponent', () => {
  let component: ItemRapMobileComponent;
  let fixture: ComponentFixture<ItemRapMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRapMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRapMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
