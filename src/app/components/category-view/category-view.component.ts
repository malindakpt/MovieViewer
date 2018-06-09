import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieStore} from '../../models/movie.store';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit, OnDestroy  {

  private sub;
  private category;
  public movieList = [];

  constructor(
    private route: ActivatedRoute,
    private movieStore: MovieStore,
    ) {
    this.sub = this.route.params.subscribe( params => {
      this.movieList = this.movieStore.cateogries[params.category];
    } );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
