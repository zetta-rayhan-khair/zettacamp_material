import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.css'
})
export class HeroCardComponent implements OnDestroy {
  @Input() hero: any;
  @Output() changeStatus: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeHero: EventEmitter<number> = new EventEmitter<number>();

  ngOnDestroy(): void {
    console.log('ini destroy')
  }
}
