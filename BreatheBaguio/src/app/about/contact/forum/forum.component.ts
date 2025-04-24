import { Component } from '@angular/core';

@Component({
  selector: 'app-forum',
  standalone: true,
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  filters = ['Latest', 'Trending', 'Nearby', 'Upcoming Events'];
}
