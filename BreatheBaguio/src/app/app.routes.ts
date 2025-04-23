import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './about/contact/contact.component';


import { MediaGalleryComponent } from './pages/media-gallery/media-gallery.component'; // adjust path if needed
import { EventsComponent } from './pages/events/events.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent },  
    { path: 'about', component: AboutComponent },
    { path: 'about/contact', component: ContactComponent },
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


