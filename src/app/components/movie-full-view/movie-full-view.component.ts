import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieStore} from '../../models/movie.store';
import {environment} from '../../../environments/environment';
import {MovieEntity} from '../../models/entities/movie.entity';

@Component({
  selector: 'app-movie-full-view',
  templateUrl: './movie-full-view.component.html',
  styleUrls: ['./movie-full-view.component.css']
})
export class MovieFullViewComponent implements OnInit, OnDestroy  {

  private sub;
  public movieDetail;
  public movie;
  public imageURL = environment.imageURL;

  constructor(
    private route: ActivatedRoute,
    private movieStore: MovieStore,
    private router: Router
  ) { }

  public ngOnInit() {
    this.sub = this.route.queryParams.subscribe((params: any) => {
      this.movie = this.movieStore.getMovieById(params.id);
      this.movieDetail = this.movieStore.getMovieDetail(params.id);
    });
  }

  public goToHome(): void {
    this.router.navigate(['/movies/all']);
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
