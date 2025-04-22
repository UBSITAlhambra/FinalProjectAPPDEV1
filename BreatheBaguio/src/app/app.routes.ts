import { Routes } from '@angular/router';
import { QuizPageComponent } from './quiz-page/quiz-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/quiz', pathMatch: 'full' },
    { path: 'quiz', component: QuizPageComponent }
];

