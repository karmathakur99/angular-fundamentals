import { UserRoutes } from './user.routes';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule
({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [

  ]
})
export class UserModule {

}
