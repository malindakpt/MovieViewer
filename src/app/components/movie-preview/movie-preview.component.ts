import {Component, Input} from '@angular/core';
import {MovieEntity} from '../../models/entities/movie.entity';
import {environment} from '../../../environments/environment';
import {MovieStore} from '../../models/movie.store';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.css']
})
export class MoviePreviewComponent {
  @Input() public movie: MovieEntity;
  @Input() public isSlider = false;
  public imageURL = environment.hostURL;

  constructor(
    private movieStore: MovieStore
  ) { }

  public getMovieYear(): string {
    const year = this.movieStore.getMovieDetail(this.movie.asset).year;
    return year ? year.toString() : '';
  }
}
