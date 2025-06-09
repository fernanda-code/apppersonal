import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class SkillsPage {
  valHTML = 0;
  valCSS = 0;
  valJS = 0;
  valAngular = 0;
  valIonic = 0;

  ngOnInit() {
    setTimeout(() => this.valHTML = 0.9, 300);
    setTimeout(() => this.valCSS = 0.85, 500);
    setTimeout(() => this.valJS = 0.8, 700);
    setTimeout(() => this.valAngular = 0.75, 900);
    setTimeout(() => this.valIonic = 0.7, 1100);
  }
}

