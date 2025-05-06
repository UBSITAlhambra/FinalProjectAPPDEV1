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
    },
    {
      title: 'Eco-Brick Workshop',
      date: '2025-05-18',
      location: 'Baguio Makerspace',
      description: 'Hands-on workshop on creating eco-bricks from plastic waste.',
      rsvpLink: 'https://example.com/ecobrick'
    },
    {
      title: 'Zero Waste Lifestyle Talk',
      date: '2025-05-22',
      location: 'University of the Cordilleras',
      description: 'Learn practical ways to live a zero-waste lifestyle.',
      rsvpLink: 'https://example.com/zerowaste'
    },
    {
      title: 'Sustainable Gardening Meetup',
      date: '2025-05-25',
      location: 'Baguio Botanical Garden',
      description: 'Meet with fellow gardeners to exchange tips on sustainable gardening.',
      rsvpLink: 'https://example.com/gardening'
    },
    {
      title: 'Green Tech Expo',
      date: '2025-05-30',
      location: 'SM Baguio Convention Center',
      description: 'Explore the latest innovations in renewable energy and green technology.',
      rsvpLink: 'https://example.com/greentech'
    }
  ];
}
