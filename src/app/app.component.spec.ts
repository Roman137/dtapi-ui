import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {Component, DebugElement} from '@angular/core';
import {RouterLinkStubDirective, RouterOutletStubComponent} from '../testing/router-stubs';
import {By} from '@angular/platform-browser';

@Component({selector: 'app-nav', template: ''})
class NavStubComponent {
}


describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, NavStubComponent, RouterLinkStubDirective, RouterOutletStubComponent
      ],
      providers: [AppRoutingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));
    links = linkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));
  // #docregion tests
  it('can get RouterLinks from template', () => {
    expect(links.length).toBe(0, 'should have 0 links');
  });

});
