import { Component } from '@angular/core';
import { PageTemplateComponent } from "../page-template/page-template.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [PageTemplateComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
