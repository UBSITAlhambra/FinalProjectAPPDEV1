import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Required for navigation

interface Post {
  id: number;
  title: string;
  content: string;
  tags: string[];
}

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  isLoggedIn: boolean = false; 
  
  posts: Post[] = [
    {
      id: 1,
      title: 'How to Reduce Household Waste in Baguio',
      content: 'Hi everyone! I’m looking for effective ways to minimize household waste.',
      tags: ['latest']
    },
    {
      id: 2,
      title: 'Upcoming Tree Planting Drive in Burnham Park 🌳',
      content: 'Join us this weekend for a community tree planting activity!',
      tags: ['upcoming', 'trending']
    },
    {
      id: 3,
      title: 'Suggestions for Bike-Friendly Routes?',
      content: 'Can anyone recommend safe, bike-friendly routes?',
      tags: ['nearby']
    },
    {
      id: 4,
      title: 'Eco-Friendly Products Available in Local Stores?',
      content: 'Found local stores that sell eco-friendly products?',
      tags: ['trending']
    },
    {
      id: 5,
      title: 'Climate Change Education for Kids',
      content: 'Looking for child-friendly resources on climate change.',
      tags: ['latest']
    }
  ];

  currentFilter: string = 'all'; // Default filter

  // Form input values
  newPostTitle = '';
  newPostContent = '';
  newPostTag: string = 'latest';

  // Success message
  postSuccessMessage: string = '';

  // Available tag options
  tagOptions = ['latest', 'trending', 'nearby', 'upcoming'];

  // Computed filtered posts
  get filteredPosts(): Post[] {
    if (this.currentFilter === 'all') return this.posts;
    return this.posts.filter(post => post.tags.includes(this.currentFilter));
  }

  // Update filter
  setFilter(filter: string): void {
    this.currentFilter = filter;
  }

  // Like a post
  likePost(postId: number): void {
    console.log('Liked Post with ID:', postId);
  }

  // Comment on a post
  commentOnPost(postId: number): void {
    console.log('Commenting on Post with ID:', postId);
  }

  // Create new post
  createPost(): void {
    console.log('Redirecting to login or register page...');
    const trimmedTitle = this.newPostTitle.trim();
    const trimmedContent = this.newPostContent.trim();

  
    
    if (trimmedTitle && trimmedContent) {
      const newPost: Post = {
        id: this.posts.length + 1,
        title: trimmedTitle,
        content: trimmedContent,
        tags: [this.newPostTag]
      };

      this.posts.unshift(newPost);
      this.newPostTitle = '';
      this.newPostContent = '';
      this.newPostTag = 'latest';
      this.postSuccessMessage = '✅ Post created successfully!';

      setTimeout(() => {
        this.postSuccessMessage = '';
      }, 3000);
    }
  }

  redirectToAuth(): void {
    console.log('Redirecting to login or register page...');
  }
}
