import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  mediaList: { type: string, url: string, safeUrl: SafeResourceUrl }[] = [];

  sdg11Data = [
    {
      title: 'What is SDG 11?',
      description: 'SDG 11 stands for <strong>Sustainable Cities and Communities</strong>. It aims to make cities inclusive, safe, resilient, and sustainable. It addresses challenges like pollution, lack of housing, poor infrastructure, and climate vulnerability—issues many cities, including Baguio, are facing.'
    },
    {
      title: 'How is Baguio Affected?',
      description: 'Baguio faces urban sprawl, landslides, increasing waste, traffic congestion, and unpredictable weather due to climate change. Its mountainous geography makes it especially vulnerable to heavy rains, deforestation, and environmental degradation. Overpopulation and unmanaged development also threaten its long-term sustainability.'
    },
    {
      title: 'Call to Action',
      description: `
        We all play a part in making Baguio more sustainable. Citizens can:
        <ul>
          <li>Support eco-friendly policies and public transport.</li>
          <li>Reduce plastic use and properly dispose of waste.</li>
          <li>Participate in tree planting and reforestation programs.</li>
          <li>Stay informed and spread awareness about climate action.</li>
        </ul>`
    },
    {
      title: 'Our Objectives',
      description: `
        <ul>
          <li>Advocate for SDG 11 and highlight the cause and effects of climate change.</li>
          <li>Use videos, images, and infographics to educate the public.</li>
          <li>Offer practical tips on how to mitigate climate impact in cities like Baguio.</li>
          <li>Serve as a proxy to invite partnerships and community involvement.</li>
          <li>Act as a central hub for accessible and reliable SDG 11-related content.</li>
        </ul>`
    }
  ];

  climateResources = [
    {
      title: 'Baguio City Climate Action Plan',
      description: 'Discover how Baguio City is addressing climate change through its action plan, focusing on green urban development, renewable energy, and sustainable waste management.',
      link: 'https://baguio.gov.ph/climate-action-plan',
      imageUrl: 'https://images.unsplash.com/photo-1542800952-e5471ed41326?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Philippine Climate Change Commission',
      description: 'Learn about the national body responsible for spearheading climate action efforts across the Philippines, including disaster preparedness and climate resilience.',
      link: 'https://climate.gov.ph/',
      imageUrl: 'https://ubaguio.edu/wp-content/uploads/2023/03/DSC_0338-1024x683.jpg'
    },
    {
      title: 'Baguio Tree Planting Initiatives',
      description: 'Get involved in Baguio\'s tree planting programs, which help mitigate climate change by improving air quality and restoring green spaces.',
      link: 'https://baguio.gov.ph/tree-planting',
      imageUrl: 'https://images.unsplash.com/photo-1584970184010-5d2fd31691ce?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Philippine Green Building Council (PHILGBC)',
      description: 'Promote sustainable architecture and eco-friendly construction practices with the Philippine Green Building Council’s initiatives on green building certifications and sustainable urban designs.',
      link: 'https://philgbc.org/',
      imageUrl: 'https://www.slu.edu.ph/wp-content/uploads/2025/04/dji_fly_20250422_113450_94_1745293285335_photo-942x628.jpg'
    },
    {
      title: 'DOST-PAGASA Weather and Climate Services',
      description: 'The Department of Science and Technology’s PAGASA provides critical weather data and climate forecasting to help manage disaster risk and climate-related challenges in the Philippines.',
      link: 'https://www.pagasa.dost.gov.ph/',
      imageUrl: 'https://images.unsplash.com/photo-1548824049-12fcd2c576a3?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Sustainable Transportation in Baguio',
      description: 'Learn about Baguio’s initiatives to reduce traffic congestion and pollution through sustainable transport solutions like electric vehicles and bike lanes.',
      link: 'https://baguio.gov.ph/sustainable-transportation',
      imageUrl: 'https://www.undp.org/sites/g/files/zskgke326/files/2023-01/91874873-9CC5-4A3D-B315-073E489A4F59-13682-00000484205A0C8A.JPG'
    },
    {
      title: 'Climate-Resilient Farming in the Philippines',
      description: 'Discover sustainable farming practices and climate-resilient agriculture in the Philippines, helping farmers adapt to changing weather patterns.',
      link: 'https://www.philippineclimateagriculture.org/',
      imageUrl: 'https://images.unsplash.com/photo-1650908007715-13db33e2de6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Philippine Disaster Resilience Foundation (PDRF)',
      description: 'Explore how the Philippine Disaster Resilience Foundation is working to build disaster resilience in communities through partnerships and resources.',
      link: 'https://www.pdrf.org.ph/',
      imageUrl: 'https://images.pexels.com/photos/134065/pexels-photo-134065.jpeg?auto=compress&cs=tinysrgb&w=600' 
    },
    {
      title: 'National Integrated Climated Change Databases and Information Exchange System (NICCIDIES)',
      description: 'NICCDIES offers comprehensive data on climate change impacts in the Philippines, such as changes in rainfall patterns, droughts, threats to biodiversity and food security, sea-level rise, and public health risks.',
      link: 'https://niccdies.climate.gov.ph/',
      imageUrl: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    }
  ];

  greenTips = [
  {
    title: 'Reduce Plastic Use',
    description: 'Carry a reusable water bottle and shopping bag to cut down on single-use plastic waste.',
    imageUrl: 'https://images.pexels.com/photos/3457243/pexels-photo-3457243.jpeg?auto=compress&cs=tinysrgb&w=600'
    
  },
  {
    title: 'Save Energy at Home',
    description: 'Switch off lights and unplug electronics when not in use to save energy and reduce emissions.',
    imageUrl: 'https://images.unsplash.com/photo-1565049981953-379c9c2a5d48?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Support Local & Organic',
    description: 'Buy locally grown food to reduce your carbon footprint and support farmers in your area.',
    imageUrl: 'https://images.unsplash.com/photo-1687422809617-a7d97879b3b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Conserve Water',
    description: 'Fix leaks and turn off the tap when brushing your teeth to conserve water daily.',
    imageUrl: 'https://images.unsplash.com/photo-1560673429-b9b9338a360a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Walk or Bike More',
    description: 'Choose walking or biking for short trips to reduce air pollution and stay healthy.',
    imageUrl: 'https://images.pexels.com/photos/631986/pexels-photo-631986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Plant a Tree',
    description: 'Trees help clean the air, combat climate change, and improve local biodiversity.',
    imageUrl: 'https://images.unsplash.com/photo-1524602585632-a2a01c12307c?q=80&w=2107&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

  
  constructor(
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    const rawVideos = [
      'https://www.youtube.com/embed/_xBKBczmfP0', 
      'https://www.youtube.com/embed/h33Sc3Z9sr4'
    ];

    this.mediaList = rawVideos.map(url => ({
      type: 'video',
      url,
      safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(url + '?autoplay=1')
    }));
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = anchor.getAttribute('href');
          if (targetId) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          }
        });
      });
    }
  }
}
