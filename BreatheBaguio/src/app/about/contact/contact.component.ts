import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // To enable ngModel
import { ForumComponent } from './forum/forum.component';  // Import ForumComponent
import { CommonModule } from '@angular/common';  // Import CommonModule to support *ngIf, *ngFor

@Component({
  selector: 'app-contact',
  standalone: true,  // Mark this as a standalone component
  imports: [FormsModule, ForumComponent, CommonModule],  // Import FormsModule, ForumComponent, and CommonModule
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    email: '',
    message: ''
  };

  showForum = false;  // Flag to toggle forum visibility

  // Method to handle form submission
  onSubmit() {
    alert(`Message sent from: ${this.contact.email}`);
    this.contact = { email: '', message: '' }; // Reset form after submission
  }

  toggleForum() {
    this.showForum = !this.showForum;  // Toggle forum visibility
  }
}
