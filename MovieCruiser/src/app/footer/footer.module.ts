import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksComponent } from './links/links.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LinksComponent, 
    ContactComponent
  ],
  exports:[
    LinksComponent,
    ContactComponent
  ]
})
export class FooterModule { }
