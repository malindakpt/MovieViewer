import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  public allMovies = [];
  public config = {
    slidesPerView: 2
  };
  constructor(
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.allMovies = this.movieService.getAllMovies();
  }

}
