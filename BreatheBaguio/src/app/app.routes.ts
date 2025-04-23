import { Routes } from '@angular/router';

import { MediaGalleryComponent } from './pages/media-gallery/media-gallery.component'; // adjust path if needed
import { EventsComponent } from './pages/events/events.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'media',
    component: MediaGalleryComponent
  },
  {
    path: '',
    redirectTo: 'media',
    pathMatch: 'full'
  }

];

