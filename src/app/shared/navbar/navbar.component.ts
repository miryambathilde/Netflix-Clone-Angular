import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navBackground: any;
  showLogout: any = { 'display': 'block' };
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


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit (): void {
    this.showButton()
  }

  showButton () {
    if (this.router.url === '/login' || this.router.url === '/register') {
      this.showLogout = { 'display': 'none' };
    } else {
      this.showLogout = { 'display': 'block' };
    }
  }

  onClick () {
    this.userService.logout()
      .then(() => {
        this.router.navigate([ '/login' ]);
      })
      .catch(error => console.log(error));
  }
}
