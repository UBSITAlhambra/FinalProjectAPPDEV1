import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'quiz-page',
  imports: [ReactiveFormsModule, NgIf, NgClass, CommonModule],
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent {
  carbonForm: FormGroup;
  score: number = 0;
  feedback: string = '';

  constructor() {
    this.carbonForm = new FormGroup({
      transport: new FormControl('', Validators.required),
      diet: new FormControl('', Validators.required),
      electricity: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.carbonForm.valid) {
      this.calculateScore();
      this.provideFeedback();
    }
  }

  calculateScore() {
    const formValues = this.carbonForm.value;
    this.score = 0;

    if (formValues.transport === 'Car') {
      this.score += 10;
    } else if (formValues.transport === 'Public') {
      this.score += 5;
    } else {
      this.score += 2;
    }

    if (formValues.diet === 'Meat') {
      this.score += 10;
    } else if (formValues.diet === 'Vegetarian') {
      this.score += 5;
    } else {
      this.score += 2;
    }

    if (formValues.electricity === 'High') {
      this.score += 10;
    } else if (formValues.electricity === 'Medium') {
      this.score += 5;
    } else {
      this.score += 2;
    }
  }

  provideFeedback() {
    if (this.score < 15) {
      this.feedback = 'Great job! Your carbon footprint is low. Keep up the good work!';
    } else if (this.score < 30) {
      this.feedback = 'Good effort, but there’s room for improvement. Consider using more sustainable options.';
    } else {
      this.feedback = 'Your carbon footprint is high. Try adopting greener alternatives like public transport, a plant-based diet, and energy-efficient appliances.';
    }
  }
}
