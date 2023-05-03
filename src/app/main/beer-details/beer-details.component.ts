import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Beer } from '../../shared/beer.model';
import { BeersService } from './../../shared/beers.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss']
})
export class BeerDetailsComponent implements OnInit {
  id: string;
  beers: Beer[] = [];
  error = null;
  isFetching = false;
  isLoadingImage: boolean;
  beerColor: any = null;
  beerColorName: any = null;
  // used in the description of each beer
  beerColorTable = [
    ['#FFFC46', 2, 'Pale Straw'],
    ['#FFE93D', 3, 'Straw'],
    ['#FED849', 4, 'Pale Gold'],
    ['#FFA847', 6, 'Deep Gold'],
    ['#F49F44', 9, 'Pale Amber'],
    ['#D77F59', 12, 'Medium Amber'],
    ['#94523A', 15, 'Deep Amber'],
    ['#804541', 18, 'Amber-Brown'],
    ['#5B342F', 20, 'Brown'],
    ['#4C3B2B', 24, 'Ruby Brown'],
    ['#38302E', 30, 'Deep Brown'],
    ['#31302C', 40, 'Black']
  ];
  private readonly canGoBack: boolean;
  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly beersService: BeersService,
              private readonly router: Router,
              private readonly location: Location) {
                this.canGoBack = !!(this.router.getCurrentNavigation()?.previousNavigation);

  }

  ngOnInit():void {
    this.isLoadingImage = true;
    this.id = this.activatedRoute.snapshot.params.id;
    this.searchBeers(this.id);
  }
  
  /**
   * search the data of one selected beer
   * @param id {string} id of the selected beer
   */
  searchBeers(id: string):void {
    this.isFetching = true;
    this.beersService.searchBeers('ids', id, '1').subscribe(
      beer => {
        this.isFetching = false;
        this.beers = beer;
        if (this.beers[0].srm) { this.onDeterminesBeerColor(this.beers[0].srm); }
      },
      error => {
        this.isFetching = false;
        this.error = error;
      }
    );
  }
  /**
   * color adapted to SRM number
   * @param srm {number}
   */
  onDeterminesBeerColor(srm: number):void {
    this.beerColorTable.sort((a: any, b: any) => {
      return Math.abs(a[1] - srm) - Math.abs(b[1] - srm);
    });
    this.beerColor = this.beerColorTable[0][0];
    this.beerColorName = this.beerColorTable[0][2];
  }

  onHideImageLoader():void {
    this.isLoadingImage = false;
  }

  /**
   * go back safely to the previous page
   */
  goBack(): void {
    if (this.canGoBack) {
      // We can safely go back to the previous location as
      // we know it's within our app.
      this.location.back();
    } else {
      // There's no previous navigation.
      // Here we decide where to go. For example, let's say the
      // upper level is the index page, so we go up one level.
      this.router.navigate(['..'], {relativeTo: this.activatedRoute});
    }
  }
}
