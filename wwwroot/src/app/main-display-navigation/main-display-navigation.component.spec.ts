import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDisplayNavigationComponent } from './main-display-navigation.component';

describe('MainDisplayNavigationComponent', () => {
  let component: MainDisplayNavigationComponent;
  let fixture: ComponentFixture<MainDisplayNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDisplayNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDisplayNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
