import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceSplashPageComponent } from './maintenance-splash-page.component';

describe('MaintenanceSplashPageComponent', () => {
  let component: MaintenanceSplashPageComponent;
  let fixture: ComponentFixture<MaintenanceSplashPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceSplashPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceSplashPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
