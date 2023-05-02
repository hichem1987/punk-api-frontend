import { Component, Input } from '@angular/core';

import { Beer } from '../../shared/beer.model';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent {
  @Input() beers: Beer;
  @Input() isFetching: boolean;
  @Input() error: string;

  constructor() { }


}
