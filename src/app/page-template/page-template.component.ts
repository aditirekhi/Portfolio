import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-page-template',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './page-template.component.html',
  styleUrl: './page-template.component.css'
})
export class PageTemplateComponent {

}
