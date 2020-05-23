import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompleteProfilePageRoutingModule } from './complete-profile-routing.module';

import { CompleteProfilePage } from './complete-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompleteProfilePageRoutingModule
  ],
  declarations: [CompleteProfilePage]
})
export class CompleteProfilePageModule {}
