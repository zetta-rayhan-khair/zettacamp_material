import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroCardComponent } from './hero-card/hero-card.component';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [HeroCardComponent, NgFor, FormsModule],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css',
})
export class HeroListComponent {
  heroList = [
    {
      name: 'hero 1',
      isActive: true,
      _id: 1,
    },
    {
      name: 'hero 2',
      isActive: true,
      _id: 2,
    },
    {
      name: 'hero 3',
      isActive: true,
      _id: 3,
    },
  ];

  heroName: string = 'hero ...';

  updateHeroStatus(event: any): void {
    if (typeof event === 'number' && event !== 0) {
      const foundHeroIndex: any = this.heroList?.length
        ? this.heroList.findIndex((hero: any) => hero?._id === event)
        : null;
      if (foundHeroIndex !== -1)
        this.heroList[foundHeroIndex].isActive =
          !this.heroList[foundHeroIndex].isActive;
    }
  }

  onAddHero() {
    if (this.heroName.trim()) {
      this.heroList.push({
        name: this.heroName,
        _id: this.heroList[this.heroList.length - 1]?._id + 1,
        isActive: true,
      });

      this.heroName = 'hero ...';
    }
  }

  removeHero(event: any) {
    if (typeof event === 'number' && event !== 0) {
      const foundHeroIndex: any = this.heroList?.length
        ? this.heroList.findIndex((hero: any) => hero?._id === event)
        : null;
      if (foundHeroIndex !== -1)
        this.heroList.splice(foundHeroIndex, 1);
    }
  }
}
