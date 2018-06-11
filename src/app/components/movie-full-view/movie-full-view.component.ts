import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieStore} from '../../models/movie.store';
import {environment} from '../../../environments/environment';

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

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe((params: any) => {
      this.movie = this.movieStore.getMovieById(params.id)
      console.log(this.movie);
      this.movieDetail = this.movieStore.getMovieDetail(params.id);
    });
  }

  public goToHome(): void {
    this.router.navigate(['/movies/all']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
