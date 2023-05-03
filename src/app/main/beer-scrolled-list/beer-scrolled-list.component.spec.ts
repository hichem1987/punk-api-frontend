import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BeersService } from 'src/app/shared/beers.service';
import { BeerScrolledListComponent } from './beer-scrolled-list.component';
import beerMocks from './../../shared/beer-mock.json';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('BeerScrolledListComponent', () => {
  let component: BeerScrolledListComponent;
  let fixture: ComponentFixture<BeerScrolledListComponent>;
  const mockData = beerMocks;
  const mockBeersService = jasmine.createSpyObj('BeersService', ['searchBeers']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerScrolledListComponent ],
      providers: [
        { provide: BeersService, useValue: mockBeersService },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    mockBeersService.searchBeers.and.returnValue(of(mockData));
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
