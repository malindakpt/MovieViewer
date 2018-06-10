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
    navigation: true,
  };
  constructor(
    private movieService: MovieService,
    private movieStore: MovieStore,
    private router: Router
  ) { }

  ngOnInit() {
    this.allCategories = this.movieStore.cateogries;
  }

  public navigateToCategory(category: string): void {
    this.router.navigate(['/category', { category: category }]);
  }

}
