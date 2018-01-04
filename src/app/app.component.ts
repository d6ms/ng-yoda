import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  routeLinks: any[];
  activeLinkIndex = 0;
  private currentRoute = '';
  constructor(private router: Router) {
    this.routeLinks = [
      { label: 'トップ', link: 'top' },
      { label: '企業チャーター', link: 'corporate' },
      { label: '引越し', link: 'individuals' }
    ];
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url.slice(1);
        this.routeLinks.forEach((elm, index) => {
          if (elm.link === this.currentRoute) {
            this.activeLinkIndex = index;
          }
        });
      }
      window.scrollTo(0, 0);
    });
  }
}
