import { Component, Input, OnInit } from '@angular/core';
import { MovieEntity } from '../../models/entities/movie.entity';
import { environment } from '../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieStore} from '../../models/movie.store';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.css']
})
export class MoviePreviewComponent {
  @Input() public movie: MovieEntity;
  @Input() public isSlider = false;
  public imageURL = environment.imageURL;

  constructor(
    private movieStore: MovieStore
  ) { }


  public getMovieYear(): string {
    return this.movieStore.getMovieDetail(this.movie.asset).year.toString();
  }
}
