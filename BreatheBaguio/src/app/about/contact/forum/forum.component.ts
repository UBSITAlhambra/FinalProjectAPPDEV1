import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  // Posts data
  posts: Post[] = [
    {
      id: 1,
      title: 'How to Reduce Household Waste in Baguio',
      content: 'Hi everyone! I am looking for effective ways to minimize household waste.',
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

  // UI state
  currentFilter: string = 'all'; // Default filter
  isLoggedIn: boolean = false;
  showAuthForm: boolean = false;
  postSuccessMessage: string = '';
  authError: string = '';

  // Form inputs
  newPostTitle = '';
  newPostContent = '';
  newPostTag: string = 'latest';
  username: string = '';
  password: string = '';

  // Available tag options
  tagOptions = ['latest', 'trending', 'nearby', 'upcoming'];

  constructor(private router: Router) {}

  // Get filtered posts based on the current filter
  get filteredPosts(): Post[] {
    if (this.currentFilter === 'all') return this.posts;
    return this.posts.filter(post => post.tags.includes(this.currentFilter));
  }

  // Filter methods
  setFilter(filter: string): void {
    this.currentFilter = filter;
  }

  // Post interaction methods
  likePost(postId: number): void {
    console.log('Liked Post with ID:', postId);
  }

  commentOnPost(postId: number): void {
    console.log('Commenting on Post with ID:', postId);
  }

  // Authentication methods
  toggleAuthForm(): void {
    this.showAuthForm = !this.showAuthForm;
    this.authError = '';
  }

  login(): void {
    if (this.username.trim() && this.password.trim()) {
      this.isLoggedIn = true;
      this.showAuthForm = false;
      this.authError = '';
    } else {
      this.authError = '⚠️ Please enter both username and password.';
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    this.username = '';
    this.password = '';
  }

  redirectToAuth(): void {
    // Navigate to the login route
    this.router.navigate(['/login']);
  }

  // Create new post
  createPost(): void {
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
}