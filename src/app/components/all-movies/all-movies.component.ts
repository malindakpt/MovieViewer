import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {MovieEntity} from '../../models/entities/movie.entity';
import {MovieStore} from '../../models/movie.store';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  public allCategories = [];
  public config = {
    slidesPerView: 5,
    spaceBetween: 10,
  };
  constructor(
    private movieService: MovieService,
    private movieStore: MovieStore
  ) { }

  ngOnInit() {
    this.movieService.getAllMovies().subscribe( (data: Array<object>) => {
      let t = 0;
      for (const obj of data) {
        const movie = new MovieEntity(obj);
        this.movieStore.getCategory(movie.genres).push(movie);
        t++;
        if (t === 12) {
          break;
        }
      }

      const categories = this.movieStore.cateogries;
      for (const cat in categories) {
        if (categories.hasOwnProperty(cat)) {
          this.allCategories.push({
            name: cat,
            movies: categories[cat]
          });
        }
      }

      console.log(this.allCategories);
    });

  }

}
