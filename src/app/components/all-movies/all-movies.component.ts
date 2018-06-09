import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {MovieEntity} from '../../models/entities/movie.entity';
import {MovieStore} from '../../models/movie.store';
import {Router} from '@angular/router';
import {CategoryEntiry} from '../../models/entities/category.entiry';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  public allCategories: Array<CategoryEntiry> = [];
  public config = {
    slidesPerView: 5,
    spaceBetween: 10,
  };
  constructor(
    private movieService: MovieService,
    private movieStore: MovieStore,
    private router: Router
  ) { }

  public refresh(): void {
    this.allCategories = this.movieStore.cateogries;
  }
  ngOnInit() {

    // this.movieStore.cateogries.subscribe(data => {
    //   let t = 0;
    //   console.log(data);
    //     for (const obj of data) {
    //       const movie = new MovieEntity(obj);
    //       this.movieStore.getCategory(movie.genres).push(movie);
    //       t++;
    //       if (t === 12) {
    //         break;
    //       }
    //     }
    // });

    this.allCategories = this.movieStore.cateogries;

    // this.movieService.getAllMovies().subscribe( (data: Array<object>) => {
    //   let t = 0;
    //   for (const obj of data) {
    //     const movie = new MovieEntity(obj);
    //     this.movieStore.getCategory(movie.genres).push(movie);
    //     t++;
    //     if (t === 12) {
    //       break;
    //     }
    //   }
    //
    //   const categories = this.movieStore.cateogries;
    //   for (const cat in categories) {
    //     if (categories.hasOwnProperty(cat)) {
    //       this.allCategories.push(new CategoryEntiry({
    //         name: cat,
    //         movies: categories[cat]
    //       }));
    //     }
    //   }
    //
    //   console.log(this.allCategories);
    // });

  }

  public navigateToCategory(category: string): void {
    this.router.navigate(['/category', { category: category }]);
  }

}
