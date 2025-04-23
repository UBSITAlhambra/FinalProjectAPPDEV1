import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './about/contact/contact.component';
import { FormsModule } from '@angular/forms';

import { MediaGalleryComponent } from './pages/media-gallery/media-gallery.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';

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
  imports: [RouterModule, HomeComponent,HeaderComponent,FooterComponent, MainContentComponent,MediaGalleryComponent, 
           RouterOutlet,AboutComponent, ContactComponent, HomeComponent, FormsModule]  // Import RouterModule here
})
export class AppComponent {
  title = 'BreatheBaguio';
}

// Define routes here (can be inside the AppComponent or a separate file)
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },

//  { path: 'about', component: AboutComponent },
 // { path: 'quiz', component: QuizComponent },
 // { path: 'resources', component: ResourcesComponent },
//  { path: 'involvement', component: InvolvementComponent },
//  { path: 'forum', component: ForumComponent },
//  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];
