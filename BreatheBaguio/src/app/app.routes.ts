import { Routes } from '@angular/router';
import { MediaGalleryComponent } from './pages/media-gallery/media-gallery.component'; // adjust path if needed
import { EventsComponent } from './pages/events/events.component';

export const routes: Routes = [
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