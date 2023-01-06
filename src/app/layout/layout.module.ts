import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';
import { ItemFrameComponent } from './item-frame/item-frame.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterOutlet} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    ItemFrameComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    LayoutComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    RouterOutlet
  ]
})
export class LayoutModule { }
