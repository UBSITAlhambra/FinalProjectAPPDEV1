import { Component, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  mediaList: { type: string, url: string, safeUrl: SafeResourceUrl }[] = [];

  // SDG 11 data
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
      description: `We all play a part in making Baguio more sustainable. Citizens can:
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

  // Climate resources data
  climateResources = [
    {
      title: 'Baguio City Climate Action Plan',
      description: 'Discover how Baguio City is addressing climate change through its action plan, focusing on green urban development, renewable energy, and sustainable waste management.',
      link: 'https://baguio.gov.ph/climate-action-plan',
      imageUrl: 'https://via.placeholder.com/500x300?text=Baguio+City+Climate+Action+Plan'  // Placeholder Image
    },
    {
      title: 'Philippine Climate Change Commission',
      description: 'Learn about the national body responsible for spearheading climate action efforts across the Philippines, including disaster preparedness and climate resilience.',
      link: 'https://climate.gov.ph/',
      imageUrl: 'https://via.placeholder.com/500x300?text=Philippine+Climate+Change+Commission'  // Placeholder Image
    },
    {
      title: 'Baguio Tree Planting Initiatives',
      description: 'Get involved in Baguio\'s tree planting programs, which help mitigate climate change by improving air quality and restoring green spaces.',
      link: 'https://baguio.gov.ph/tree-planting',
      imageUrl: 'https://via.placeholder.com/500x300?text=Baguio+Tree+Planting+Initiatives'  // Placeholder Image
    },
    {
      title: 'Philippine Green Building Council (PHILGBC)',
      description: 'Promote sustainable architecture and eco-friendly construction practices with the Philippine Green Building Council’s initiatives on green building certifications and sustainable urban designs.',
      link: 'https://philgbc.org/',
      imageUrl: 'https://via.placeholder.com/500x300?text=Philippine+Green+Building+Council'  // Placeholder Image
    },
    {
      title: 'DOST-PAGASA Weather and Climate Services',
      description: 'The Department of Science and Technology’s PAGASA provides critical weather data and climate forecasting to help manage disaster risk and climate-related challenges in the Philippines.',
      link: 'https://www.pagasa.dost.gov.ph/',
      imageUrl: 'https://via.placeholder.com/500x300?text=DOST-PAGASA+Weather+and+Climate+Services'  // Placeholder Image
    },
    {
      title: 'Sustainable Transportation in Baguio',
      description: 'Learn about Baguio’s initiatives to reduce traffic congestion and pollution through sustainable transport solutions like electric vehicles and bike lanes.',
      link: 'https://baguio.gov.ph/sustainable-transportation',
      imageUrl: 'https://via.placeholder.com/500x300?text=Sustainable+Transportation+in+Baguio'  // Placeholder Image
    },
    {
      title: 'Climate-Resilient Farming in the Philippines',
      description: 'Discover sustainable farming practices and climate-resilient agriculture in the Philippines, helping farmers adapt to changing weather patterns.',
      link: 'https://www.philippineclimateagriculture.org/',
      imageUrl: 'https://via.placeholder.com/500x300?text=Climate-Resilient+Farming+in+the+Philippines'  // Placeholder Image
    },
    {
      title: 'Philippine Disaster Resilience Foundation (PDRF)',
      description: 'Explore how the Philippine Disaster Resilience Foundation is working to build disaster resilience in communities through partnerships and resources.',
      link: 'https://www.pdrf.org.ph/',
      imageUrl: 'https://via.placeholder.com/500x300?text=Philippine+Disaster+Resilience+Foundation'  // Placeholder Image
    }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const rawVideos = [
      'https://www.youtube.com/embed/dQw4w9WgXcQ',
      'https://www.youtube.com/embed/oHg5SJYRHA0'  // Add as many as you like
    ];

    this.mediaList = rawVideos.map(url => ({
      type: 'video',
      url,
      safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(url + '?autoplay=1')
    }));
  }

  ngAfterViewInit(): void {
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
