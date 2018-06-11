import { Component, Input, OnInit } from '@angular/core';
import { MovieEntity } from '../../models/entities/movie.entity';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.css']
})
export class MoviePreviewComponent {
  @Input() public movie: MovieEntity;
  @Input() public isSlider = false;
  public imageURL = environment.imageURL;
}
