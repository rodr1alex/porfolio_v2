import { Component } from '@angular/core';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';

@Component({
  selector: 'experiences',
  standalone: true,
  imports: [ExperienceCardComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {

}
