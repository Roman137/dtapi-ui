import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {RouterTestingModule} from '@angular/router/testing';
import {AdminMaterialModule} from '../custom-material-modules/admin-material.module';
import {AdminModule} from './admin.module';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
