import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForumComponent } from './forum/forum.component';

// Define the contact model
interface Contact {
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ForumComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Contact form data
  contact: Contact = {
    email: '',
    message: ''
  };

  // Control forum visibility
  showForum: boolean = false;

  // Toggle forum visibility
  toggleForum(): void {
    this.showForum = !this.showForum;
  }

  // Form submission handler
  onSubmit(): void {
    console.log('Form submitted:', this.contact);
    // Reset form after submission
    this.contact = {
      email: '',
      message: ''
    };
    // You can add more logic here (e.g., sending data to a service)
    alert('Message sent successfully!');
  }
}