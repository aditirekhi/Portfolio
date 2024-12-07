import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { PageTemplateComponent } from "../page-template/page-template.component";

@Component({
  selector: 'about-me',
  standalone: true,
  imports: [PageTemplateComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
