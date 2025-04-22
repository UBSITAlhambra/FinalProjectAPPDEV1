import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  standalone: true,
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  imports: [CommonModule]
})
export class EventsComponent {
  events = [
    {
      title: 'Tree Planting Drive',
      date: '2025-05-10',
      location: 'Camp John Hay Eco Trail',
      description: 'Join us to help plant trees and restore the pine forest!',
      rsvpLink: 'https://youtu.be/dQw4w9WgXcQ?si=oX__nNXnetJKWXDp'
    },
    {
      title: 'Coastal Cleanup Webinar',
      date: '2025-05-15',
      location: 'Online',
      description: 'Virtual session on cleanup best practices and climate education.',
      rsvpLink: 'https://youtu.be/dQw4w9WgXcQ?si=oX__nNXnetJKWXDp'
    }
  ];
}