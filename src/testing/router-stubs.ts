export {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';

import {Component, Directive, HostListener, Injectable, Input} from '@angular/core';
import {NavigationExtras} from '@angular/router';

// #docregion router-link
/* noinspection */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[routerLink]'
})
export class RouterLinkStubDirective {
  @Input() routerLink: any;
  navigatedTo: any = null;

  @HostListener('click') onClick() {
    this.navigatedTo = this.routerLink;
  }
}

// #enddocregion router-link

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'router-outlet', template: ''
})
export class RouterOutletStubComponent {
}

@Injectable()
export class RouterStub {
  navigate(commands: any[], extras?: NavigationExtras) {
  }
}


// Only implements params and part of snapshot.params
// #docregion activated-route-stub
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ActivatedRouteStub {

  // ActivatedRoute.params is Observable
  private subject = new BehaviorSubject(this.testParams);
  params = this.subject.asObservable();

  // Test parameters
  private _testParams: {};
  get testParams() {
    return this._testParams;
  }

  set testParams(params: {}) {
    this._testParams = params;
    this.subject.next(params);
  }

  // ActivatedRoute.snapshot.params
  get snapshot() {
    return {params: this.testParams};
  }
}

// #enddocregion activated-route-stub
