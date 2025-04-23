import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = {
    email: '',
    message: ''
  };

  // Method to handle form submission
  onSubmit() {
    // You can process the form data here (e.g., send it to a server)
    alert(`Message sent from: ${this.contact.email}`);
    this.contact = { email: '', message: '' }; // Reset form after submission
  }
}
