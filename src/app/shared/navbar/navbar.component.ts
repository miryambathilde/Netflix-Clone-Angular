import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navBackground: any;
  @HostListener('document:scroll') scrollover () {
    console.log(document.body.scrollTop, 'scrolllength#');

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navBackground = {
        'background-color': '#0e0e0ede'
      }
    } else {
      this.navBackground = {}
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
