import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerScrolledListComponent } from './beer-scrolled-list.component';

describe('BeerScrolledListComponent', () => {
  let component: BeerScrolledListComponent;
  let fixture: ComponentFixture<BeerScrolledListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerScrolledListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerScrolledListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
