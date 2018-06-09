import {RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoviePreviewComponent } from './components/movie-preview/movie-preview.component';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { MovieFullViewComponent } from './components/movie-full-view/movie-full-view.component';
import {MovieService} from './services/movie.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SWIPER_CONFIG, SwiperConfigInterface, SwiperModule} from 'ngx-swiper-wrapper';
import {MovieStore} from './models/movie.store';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

const routes: Routes = [
  { path: 'all', component: AllMoviesComponent },
  { path: 'category', component: CategoryViewComponent },
  { path: 'full', component: MovieFullViewComponent },
  { path: '', redirectTo: '/all', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    MoviePreviewComponent,
    AllMoviesComponent,
    CategoryViewComponent,
    MovieFullViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpClientModule,
    SwiperModule
  ],
  providers: [ MovieStore, MovieService, {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
