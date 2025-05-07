import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  async ngAfterViewInit(): Promise<void> {
    if (typeof window !== 'undefined') {
      const L = await import('leaflet');

      const map = L.map('map').setView([16.4023, 120.5960], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      L.marker([16.4065, 120.6006]).addTo(map).bindPopup('Community Cleanup');
      L.marker([16.4105, 120.5955]).addTo(map).bindPopup('Tree-Planting Drive');
      L.marker([16.4050, 120.5910]).addTo(map).bindPopup('Eco-Event');
    }
  }
}