import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';  // Import HeroComponent
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeroComponent],  // Import HeroComponent here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Any additional logic for HeaderComponent can go here
}

