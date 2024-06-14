import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.css'
})
export class HeroCardComponent {
  @Input() hero: any;
  @Output() changeStatus: EventEmitter<number> = new EventEmitter<number>();
}
