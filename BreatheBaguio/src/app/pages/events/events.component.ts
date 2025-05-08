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
      location: 'Bayan Park/Valenzuela Park/Baguio Dairy Farm',
      description: 'Join the annual Saleng Festival tree planting drive to reforest and green Baguio’s urban spaces.',
      rsvpLink: 'https://new.baguio.gov.ph/news/groupsinstitutions-join-saleng-festival-tree-planting-activities-city-continues-seedling-production-shares-to-benguet-municipality'
    },
    {
      title: 'Coastal Cleanup Webinar',
      date: '2025-05-15',
      location: 'Online',
      description: 'Virtual session on cleanup best practices and climate education.',
      rsvpLink: 'https://new.baguio.gov.ph/news/city-institutionalizes-eco-waste-fair'
    },
    {
      title: 'Eco-Brick Workshop',
      date: '2025-05-18',
      location: 'Baguio Makerspace',
      description: 'Hands-on workshop on creating eco-bricks from plastic waste.',
      rsvpLink: 'https://www.facebook.com/UpcyclePhilippines/posts/10157894400434824'
    },
    {
      title: 'Earth Day Expo at CURMA',
      date: '2025-04-26',
      location: 'CURMA, La Union (Hosted by Zero Waste Baguio)',
      description: 'Celebrate Earth Day with workshops on sea turtles, upcycling, marine biology, storytelling, and visible mending — plus a film showing!',
      rsvpLink: 'https://tinyurl.com/Expo2025-worskhops'
    },
    {
      title: 'Sustainable Gardening Meetup',
      date: '2025-05-25',
      location: 'Baguio Botanical Garden',
      description: 'Meet with fellow gardeners to exchange tips on sustainable gardening.',
      rsvpLink: 'https://www.facebook.com/baguioherald/posts/baguio-city-various-baguio-benguet-urban-gardeners-took-part-in-a-seed-sharing-a/1048462137301115/'
    },
    {
      title: 'North Luzon Innovation Summit 2025',
      date: '2025-05-30',
      location: 'CAP-John Hay Trade and Cultural Center, Baguio City',
      description: 'A 3-day summit featuring tech showcases, business matching, and panels on sustainable innovation, IP management, and government-academic partnerships to drive regional development.',
      rsvpLink: 'hhttps://baguioheraldexpressonline.com/north-luzon-innovation-and-technology-transfer-summit-2025-opens-in-baguio-city/?fbclid=IwY2xjawKJIUBleHRuA2FlbQIxMQBicmlkETBQUlFUMFB5YVRvUzZUV1paAR4_PQmRp1H3KBaIktovJtwvd3ZiBkCJP0M7juJpcZAminfWd-Y_PuLWdToGXg_aem_eG1vR57ciOmGVWchTHn3vw'
    },
    {
      title: "Baguio City's Circular Economy Program Launch",
      date: '2025-05-04',
      location: 'Baguio Convention Center',
      description: 'An initiative to implement circular economy principles in Baguio through sustainable waste management, recycling, and local green innovation. The event includes stakeholder talks, solution showcases, and program briefings.',
      rsvpLink: 'https://www.facebook.com/photo/?fbid=862126165926885&set=pcb.862126615926840'
    },
    {
      title: 'Upcycled Art Exhibit: Sustainable Creations',
      date: '2025-06-12',
      location: 'Museo Kordilyera, UP Baguio',
      description: 'Explore creative art pieces made from recycled materials, promoting sustainable consumption and production.',
      rsvpLink: 'https://www.unesco.org/en/sustainable-development-goals/sustainable-cities-communities'
    },
    {
      title: 'Clean Air Baguio Bike Parade for Sustainable Transport',
      date: '2025-06-15',
      location: 'Session Road to Burnham Park',
      description: 'Join the ride to promote clean transport, reduce air pollution, and create more sustainable urban mobility.',
      rsvpLink: 'https://www.itdp.org/'
    },
    {
      title: 'Baguio Green Market Day: Local & Sustainable Produce',
      date: '2025-06-20',
      location: 'Baguio City Public Market',
      description: 'Support local farmers and sustainable agriculture, fostering resilient local economies and reducing environmental impact.',
      rsvpLink: 'https://www.fao.org/sustainable-development-goals/goal-11-sustainable-cities-and-communities/en/'
    }
  ];
}
