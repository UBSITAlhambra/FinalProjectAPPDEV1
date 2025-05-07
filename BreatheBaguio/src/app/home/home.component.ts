import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mediaList: { type: string, url: string, safeUrl: SafeResourceUrl }[] = [];

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
}
