import {Component, HostListener, OnInit} from '@angular/core';
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
    spaceBetween: 2,
    navigation: true,
  };
  constructor(
    private movieService: MovieService,
    private movieStore: MovieStore,
    private router: Router
  ) { }

  ngOnInit() {
    this.setSlidesPerView(window.innerWidth);
    this.allCategories = this.movieStore.cateogries;

  }

  public navigateToCategory(category: string): void {
    this.router.navigate(['/movies/category', { category: category }]);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setSlidesPerView(event.target.innerWidth);
  }


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
