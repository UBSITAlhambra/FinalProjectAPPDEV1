import { CommonModule, NgIf } from '@angular/common';
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

  // Available options for the questions
  insulationOptions = ['Wall insulation', 'Roof insulation', 'Double glazing', 'None'];
  recyclingItems = ['Plastic', 'Glass', 'Paper', 'Metal', 'Clothing'];
  sustainableActions = ['Recycle', 'Plant Trees', 'Ride Bike'];

  constructor() {
    this.carbonForm = new FormGroup({
      transport: new FormControl('', Validators.required),
      diet: new FormControl('', Validators.required),
      electricity: new FormControl('', Validators.required),
      water: new FormControl('', Validators.required),
      appliances: new FormControl('', Validators.required),
      contribution: new FormControl('', Validators.required),
      insulation: new FormArray(this.insulationOptions.map(() => new FormControl(false))),
      waste: new FormArray(this.recyclingItems.map(() => new FormControl(false))),
      sustainableAction: new FormControl(''),
      eventDate: new FormControl('', Validators.required)
    });
  }

  get insulationControls(): FormControl[] {
    return (this.carbonForm.get('insulation') as FormArray).controls as FormControl[];
  }

  get wasteControls(): FormControl[] {
    return (this.carbonForm.get('waste') as FormArray).controls as FormControl[];
  }

  // Adding recyclingControls getter
  get recyclingControls(): FormControl[] {
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
    } else if (formValues.transport === 'Bike') {
      this.score += 3;
    } else if (formValues.transport === 'Walk') {
      this.score += 2;
    }

    // Diet
    if (formValues.diet === 'Meat') {
      this.score += 10;
    } else if (formValues.diet === 'Vegetarian') {
      this.score += 5;
    } else if (formValues.diet === 'Vegan') {
      this.score += 3;
    }

    // Electricity
    if (formValues.electricity === 'High') {
      this.score += 10;
    } else if (formValues.electricity === 'Medium') {
      this.score += 5;
    } else if (formValues.electricity === 'Low') {
      this.score += 2;
    }

    // Water usage
    this.score += formValues.water / 10; // Assuming water is a percentage (0-100)

    // Appliances
    if (formValues.appliances === 'Yes') {
      this.score += 3;
    } else if (formValues.appliances === 'No') {
      this.score += 1;
    }

    // Personal Contribution (Text input - Deducting points based on the description)
    if (formValues.contribution.length > 100) {
      this.score += 5;
    } else if (formValues.contribution.length > 50) {
      this.score += 3;
    } else if (formValues.contribution.length > 0) {
      this.score += 1;
    }

    // Insulation Measures
    formValues.insulation.forEach((selected: boolean, i: number) => {
      if (selected && this.insulationOptions[i] !== 'None') {
        this.score -= 2;
      }
    });

    // Waste practices (Multiple choices)
    formValues.waste.forEach((selected: boolean) => {
      if (selected) {
        this.score -= 1;
      }
    });

    // Sustainable action (Image selection - add score based on selection)
    if (formValues.sustainableAction === 'Recycle') {
      this.score -= 2;
    } else if (formValues.sustainableAction === 'Plant Trees') {
      this.score -= 3;
    } else if (formValues.sustainableAction === 'Ride Bike') {
      this.score -= 1;
    }

    // Ensure score does not go negative
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

  // Method for handling image selection for sustainable action
  selectAction(action: string) {
    this.carbonForm.patchValue({ sustainableAction: action });
  }
}
