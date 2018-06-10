import {Component, Input, OnInit} from '@angular/core';
import {MovieEntity} from '../../models/entities/movie.entity';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.css']
})
export class MoviePreviewComponent implements OnInit {

  @Input() movie: MovieEntity;
  @Input() isSlider = false;
  public imageURL = environment.imageURL;
  constructor() { }

  ngOnInit() {
  }

}
