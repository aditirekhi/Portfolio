import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { IntroComponent } from "./intro/intro.component";
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IntroComponent, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showIntroPage: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/']);
    interval(3500).subscribe((x) => {
      this.hideIntroPage();
    });
  }

  hideIntroPage() {
    this.showIntroPage = true;
  }
}
