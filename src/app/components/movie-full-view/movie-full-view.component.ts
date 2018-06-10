import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieStore} from '../../models/movie.store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie-full-view',
  templateUrl: './movie-full-view.component.html',
  styleUrls: ['./movie-full-view.component.css']
})
export class MovieFullViewComponent implements OnInit, OnDestroy  {

  private sub;
  public movieDetail;

  constructor(
    private route: ActivatedRoute,
    private movieStore: MovieStore,
  ) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.movieDetail = this.movieStore.getMovieDetail(params.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
