import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  public linkTheme = document.querySelector("#theme");

  constructor() { }

  ngOnInit(): void {

   
    const url = localStorage.getItem('theme');
    
    if( url) {
      this.linkTheme!.setAttribute('href', url);
    }
    else {
      this.linkTheme!.setAttribute('href', "./assets/css/colors/purple-dark.css");
    }
  }

}
