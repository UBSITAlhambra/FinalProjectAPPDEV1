import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'quiz-page',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, CommonModule],
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent {
  carbonForm: FormGroup;
  score: number = 0;
  feedback: string = '';

  insulationOptions = ['Wall insulation', 'Roof insulation', 'Double glazing', 'None'];
  wasteOptions = ['Recycle', 'Compost', 'Reuse', 'Minimal plastic use'];

  constructor() {
    this.carbonForm = new FormGroup({
      transport: new FormControl('', Validators.required),
      diet: new FormControl('', Validators.required),
      electricity: new FormControl('', Validators.required),
      insulation: new FormArray(this.insulationOptions.map(() => new FormControl(false))),
      waste: new FormArray(this.wasteOptions.map(() => new FormControl(false)))
    });
  }

  get insulationControls(): FormControl[] {
    return (this.carbonForm.get('insulation') as FormArray).controls as FormControl[];
  }

  get wasteControls(): FormControl[] {
    return (this.carbonForm.get('waste') as FormArray).controls as FormControl[];
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

    // Transport
    if (formValues.transport === 'Car') {
      this.score += 10;
    } else if (formValues.transport === 'Public') {
      this.score += 5;
    } else {
      this.score += 2;
    }

    // Diet
    if (formValues.diet === 'Meat') {
      this.score += 10;
    } else if (formValues.diet === 'Vegetarian') {
      this.score += 5;
    } else {
      this.score += 2;
    }

    // Electricity
    if (formValues.electricity === 'High') {
      this.score += 10;
    } else if (formValues.electricity === 'Medium') {
      this.score += 5;
    } else {
      this.score += 2;
    }

    // Insulation: subtract 2 points for each good practice (not "None")
    formValues.insulation.forEach((selected: boolean, i: number) => {
      if (selected && this.insulationOptions[i] !== 'None') {
        this.score -= 2;
      }
    });

    // Waste: subtract 1 point for each sustainable practice
    formValues.waste.forEach((selected: boolean, i: number) => {
      if (selected) {
        this.score -= 1;
      }
    });

    if (this.score < 0) this.score = 0;
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
