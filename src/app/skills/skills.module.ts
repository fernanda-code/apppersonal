import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkillsPage } from './skills.page';
import { SkillsPageRoutingModule } from './skills-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkillsPageRoutingModule
  ],
  declarations: [] 
})
export class SkillsPageModule {}
