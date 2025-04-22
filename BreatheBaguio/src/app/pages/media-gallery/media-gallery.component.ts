import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import { SafePipe } from '../../pipes/safe.pipe';

@Component({
  standalone: true,
  selector: 'app-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.css'],
  imports: [CommonModule, SafePipe]
})
export class MediaGalleryComponent {
  mediaItems = [
    { type: 'image', url: 'https://t4.ftcdn.net/jpg/10/03/27/95/240_F_1003279581_Xy4iDPOjEVEGuR7yrcANTyEBjqbYXIba.jpg', title: 'Sample Image' },
    { type: 'video', url: 'https://www.youtube.com/embed/8E-3P045bLc?si=2j1veUcsm6nwllHq', title: 'Sample Video' }
  ];
}