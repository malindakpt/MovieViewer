import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieStore} from '../../models/movie.store';
import {MovieEntity} from '../../models/entities/movie.entity';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit, OnDestroy  {

  private sub;
  public category;
  public movieList: Array<MovieEntity> = [];

  constructor(
    private route: ActivatedRoute,
    private movieStore: MovieStore,
    private router: Router
    ) {
    this.sub = this.route.params.subscribe( params => {
      this.category = params.category;
      this.movieList = this.movieStore.getCategory(this.category);
    });
  }

  public goToHome(): void {
    this.router.navigate(['/movies/all']);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
