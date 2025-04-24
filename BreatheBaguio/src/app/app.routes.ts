import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './pages/map/map.component';
// import { PagesComponent } from './pages/pages.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { MediaGalleryComponent } from './pages/media-gallery/media-gallery.component'; // Assuming this component exists
import { EventsComponent } from './pages/events/events.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'map', component: MapComponent },
//  { path: 'pages', component: PagesComponent },
  { path: 'quiz', component: QuizPageComponent },
  { path: 'media-gallery', component: MediaGalleryComponent }, // New route for Gallery
  { path: 'events', component: EventsComponent },
];