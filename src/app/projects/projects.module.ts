import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProjectsPageRoutingModule } from './projects-routing.module';

import { ProjectsPage } from './projects.page'; 

@NgModule({
  imports: [
    ProjectsPage, 
    CommonModule,
    IonicModule,
    ProjectsPageRoutingModule
  ]
})
export class ProjectsPageModule {}
