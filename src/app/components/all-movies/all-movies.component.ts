import {Component, HostListener} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {MovieStore} from '../../models/movie.store';
import {Router} from '@angular/router';
import {CategoryEntity} from '../../models/entities/category.entiry';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent {

  public allCategories: Array<CategoryEntity> = [];
  public config = {
    spaceBetween: 2,
    navigation: true,
    slidesPerView: 5
  };
  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    this.setSlidesPerView(event.target.innerWidth);
  }

  constructor(
    private movieService: MovieService,
    private movieStore: MovieStore,
    private router: Router
  ) {
    this.setSlidesPerView(window.innerWidth);
    this.allCategories = this.movieStore.cateogries;
  }

  public navigateToCategory(category: string): void {
    this.router.navigate(['/movies/category', { category: category }]);
  }

  // Dynamically adjust no of slids in line
  private setSlidesPerView(screenSize: number): void {
    if (screenSize > 1000 ) {
      this.config.slidesPerView = 5;
    } else if (screenSize > 700 ) {
      this.config.slidesPerView = 3;
    } else if (screenSize > 500 ) {
      this.config.slidesPerView = 2;
    } else {
      this.config.slidesPerView = 1;
    }
  }
}
