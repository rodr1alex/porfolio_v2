import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { AboutComponent } from '../about/about.component';
import { ProyectsComponent } from '../proyects/proyects.component';
import { FooterComponent } from '../footer/footer.component';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'porfolio',
  standalone: true,
  imports: [NavbarComponent, NavbarComponent, AboutComponent, ProyectsComponent, FooterComponent, ExperiencesComponent, SkillsComponent,
    ContactFormComponent
  ],
  templateUrl: './porfolio.component.html',
  styleUrl: './porfolio.component.css'
})
export class PorfolioComponent {

}
