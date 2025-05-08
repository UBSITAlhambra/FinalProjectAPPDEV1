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
    {
      type: 'image',
      url: 'https://ubaguio.edu/wp-content/uploads/2023/03/DSC_0338-1024x683.jpg',
      title: 'Philippine Climate Change Commission'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1584970184010-5d2fd31691ce?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Baguio Tree Planting Initiatives'
    },
    {
      type: 'image',
      url: 'https://www.slu.edu.ph/wp-content/uploads/2025/04/dji_fly_20250422_113450_94_1745293285335_photo-942x628.jpg',
      title: 'Philippine Green Building Council'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1548824049-12fcd2c576a3?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'DOST-PAGASA Climate Services'
    },
    {
      type: 'image',
      url: 'https://www.undp.org/sites/g/files/zskgke326/files/2023-01/91874873-9CC5-4A3D-B315-073E489A4F59-13682-00000484205A0C8A.JPG',
      title: 'Sustainable Transportation in Baguio'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1650908007715-13db33e2de6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Climate-Resilient Farming'
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/134065/pexels-photo-134065.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'PDRF Disaster Resilience'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'NICCDIES Climate Data'
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/3457243/pexels-photo-3457243.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Reduce Plastic Use'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1565049981953-379c9c2a5d48?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Save Energy at Home'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1687422809617-a7d97879b3b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Support Local & Organic'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1560673429-b9b9338a360a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Conserve Water'
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/631986/pexels-photo-631986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Walk or Bike More'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1524602585632-a2a01c12307c?q=80&w=2107&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Plant a Tree'
    },
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

      title: 'A Liveable, Inclusive and Creative City, Baguio'},
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/_xBKBczmfP0',
      title: 'What is SDG 11?'
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/h33Sc3Z9sr4',
      title: 'Baguio Climate Action Highlights'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1542800952-e5471ed41326?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Baguio City Climate Action Plan'
    }

  ];

  filter: 'all' | 'image' | 'video' = 'all';

  get filteredMedia() {
    return this.mediaItems.filter(item =>
      this.filter === 'all' ? true : item.type === this.filter
    );
  }

  setFilter(type: 'all' | 'image' | 'video') {
    this.filter = type;
  }
}