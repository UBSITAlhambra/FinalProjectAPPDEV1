import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


// import { AboutComponent } from './about/about.component';
// import { QuizComponent } from './quiz/quiz.component';
// import { ResourcesComponent } from './resources/resources.component';
// import { InvolvementComponent } from './involvement/involvement.component';
// import { ForumComponent } from './forum/forum.component';
// import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',

  

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule,HeaderComponent,FooterComponent,
           RouterOutlet
           ]  // Import RouterModule here

})
export class AppComponent {
  title = 'BreatheBaguio';
}

