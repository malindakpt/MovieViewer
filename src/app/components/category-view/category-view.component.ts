import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieStore} from '../../models/movie.store';
import {MovieEntity} from '../../models/entities/movie.entity';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit, OnDestroy  {

  private sub;
  public category;
  public movieList: Array<MovieEntity> = [];

  constructor(
    private route: ActivatedRoute,
    private movieStore: MovieStore,
    ) {
    this.sub = this.route.params.subscribe( params => {
      this.category = params.category;
      this.movieList = this.movieStore.getMovies(this.category);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
