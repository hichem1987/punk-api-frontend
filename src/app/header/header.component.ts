import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  isMobile = window.innerWidth <= 1023;

  constructor() { }

  showMenu(){
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('u-desktop-only');
    navbar.classList.remove('header__navbar--hide');
    navbar.classList.add('header__navbar--show');
  }

}
