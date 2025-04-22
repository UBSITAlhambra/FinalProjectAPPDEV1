import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MediaGalleryComponent } from './pages/media-gallery/media-gallery.component';

@Component({
  selector: 'app-root',
  imports: [MediaGalleryComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BreatheBaguio';
}
