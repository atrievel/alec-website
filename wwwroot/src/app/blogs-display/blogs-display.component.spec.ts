import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsDisplayComponent } from './blogs-display.component';

describe('BlogsDisplayComponent', () => {
  let component: BlogsDisplayComponent;
  let fixture: ComponentFixture<BlogsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
