import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFullViewComponent } from './movie-full-view.component';

describe('MovieFullViewComponent', () => {
  let component: MovieFullViewComponent;
  let fixture: ComponentFixture<MovieFullViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieFullViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFullViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
