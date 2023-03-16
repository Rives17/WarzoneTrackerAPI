import { AppRoutingModule } from './../app-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
