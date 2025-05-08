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

    {type: 'image',
      url: 'https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/481204839_1189768775846430_5791376946022050161_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5foFbNsxcT4Q7kNvwHamcUW&_nc_oc=AdlhoWs7Tkz4yVqogIuPVDSe0vqSbYQElWj1yPKhfmXJv8ujyAs0L-dWhFHjjVnrKUw&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=gWeBuQJSGp-z35vc20MIng&oh=00_AfJZn7BDMKfLyA9TxQogXW9X-VCtwlxGcMLUWxFWGa4IiQ&oe=681F7AF5',
      title: 'First Electric Vehicle' },
    {type: 'video',
      url: 'https://www.youtube.com/embed/Ge6a_Y7uC3c',
      title: 'Tree Planting in Baguio City'},
    {type: 'video',
      url: 'https://www.youtube.com/embed/po4fGTl_dAw',
      title: 'Easy Biking Destinations in Baguio'},
    {type: 'video',
      url: 'https://www.youtube.com/embed/CH68Gm-R7tY',
      title: 'Ecological Waste Management Fair in Baguio'},
    {type: 'video',
      url: 'https://www.youtube.com/embed/YT_Ae8lUF0k',
      title: 'Tour of Baguio City Market'},
    {type: 'video',
      url: 'https://www.youtube.com/embed/AyghOdEwZsc',
      title: 'Youth on Environment and Climate Change | Part 1'},
    {type: 'video',
      url: 'https://www.youtube.com/embed/_RXQ9oW4gv0',
      title: 'Let Baguio Breathe: An Environmental Advocacy Project'},
    {type: 'video',
      url: 'https://www.youtube.com/embed/ZO8N28syMDM',
      title: 'Waste and Wildfire - Sustainability Series Brent Baguio'},
    {type: 'video',
      url: 'https://www.youtube.com/embed/7MbVktZaAXk',
      title: 'Sustainable Tourism in Baguio City'},
    {type: 'video',
      url: 'https://www.youtube.com/embed/90H-EenHjdQ',
      title: "Baguio's Journey to Gender-Inclusive Flood Early Warning Systems"},
    {type: 'video',
      url: 'https://www.youtube.com/embed/8ZzgzW4KPmo?si=_-CFpjitaKNnKKHF',
      title: 'A Liveable, Inclusive and Creative City, Baguio'}

  ];
}