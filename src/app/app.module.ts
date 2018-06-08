import {RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoviePreviewComponent } from './components/movie-preview/movie-preview.component';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieFullViewComponent } from './components/movie-full-view/movie-full-view.component';

const routes: Routes = [
	{ path: 'add', component: MoviePreviewComponent },
	{ path: 'show', component: MoviePreviewComponent }, 
	{ path: '', redirectTo: '/show', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    MoviePreviewComponent,
    AllMoviesComponent,
    CategoryViewComponent,
    MovieComponent,
    MovieFullViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
