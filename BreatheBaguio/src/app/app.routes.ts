import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';
// import { PagesComponent } from './pages/pages.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { MainContentComponent } from './main-content/main-content.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'map', component: MapComponent },
//  { path: 'pages', component: PagesComponent },
  { path: 'quiz', component: QuizPageComponent },
  { path: 'main-content', component: MainContentComponent },
];