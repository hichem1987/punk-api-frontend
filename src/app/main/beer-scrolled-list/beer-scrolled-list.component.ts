import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/shared/beer.model';
import { BeersService } from 'src/app/shared/beers.service';

@Component({
  selector: 'app-beer-scrolled-list',
  templateUrl: './beer-scrolled-list.component.html',
  styleUrls: ['./beer-scrolled-list.component.scss']
})
export class BeerScrolledListComponent implements OnInit {
  isFetching :boolean;
  page=1;
  isLoadingImage:boolean =true;
  beers : Beer[]=[];
  error:any;
  constructor(private readonly beersService:BeersService) { }

  ngOnInit(): void {
    this.loadBeers(1);
  }
  /**
   * 
   * @param page {number} page param value used in the API used in the load
   */
  loadBeers(page:number):void {
    this.isFetching = true;
    this.beersService.searchBeers(String(this.page), 'page', '20').subscribe(
      beers => {
        this.beers.push(...beers);
        this.isFetching = false;
        this.isLoadingImage=false;
        
      },
      error => {
        this.isFetching = false;
        this.error = error;
        this.isLoadingImage=false;
      }
    );
  }

  onScroll(): void {
    this.isLoadingImage=true;
    this.loadBeers(++this.page);
  }

  onHideImageLoader():void {
    this.isLoadingImage = false;
  }
}
