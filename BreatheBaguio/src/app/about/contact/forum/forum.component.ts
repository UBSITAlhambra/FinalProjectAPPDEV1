import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngFor

@Component({
  selector: 'app-forum',
  standalone: true,  // Mark this as a standalone component
  imports: [CommonModule],  // Import CommonModule to support *ngFor
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  posts = [
    { id: 1, title: 'Post 1', content: 'Content of Post 1' },
    { id: 2, title: 'Post 2', content: 'Content of Post 2' },
    { id: 3, title: 'Post 3', content: 'Content of Post 3' },
  ];

  // Optional: Implement method to handle actions like posting, liking, commenting, etc.
  likePost(postId: number) {
    console.log('Liked Post with ID:', postId);
  }

  commentOnPost(postId: number) {
    console.log('Commenting on Post with ID:', postId);
  }
}
