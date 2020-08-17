import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [ProfileComponent, ContactComponent, UserComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    ProfileComponent, ContactComponent, UserComponent
  ]
})
export class ViewModule { }
