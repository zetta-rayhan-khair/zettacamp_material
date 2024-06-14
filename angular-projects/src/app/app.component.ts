import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-projects';
}
