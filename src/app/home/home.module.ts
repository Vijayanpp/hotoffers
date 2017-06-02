import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { routing } from './home.route';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HotofferoftodayComponent } from './components/hotofferoftoday/hotofferoftoday.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProducttabComponent } from './components/producttab/producttab.component';
import { GiftvoucherComponent } from './components/giftvoucher/giftvoucher.component';
import { LatestComponent } from './components/latest/latest.component';
import { OurbrandsComponent } from './components/ourbrands/ourbrands.component';
import { DontmissofferComponent } from './components/dontmissoffer/dontmissoffer.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    CommonModule,
    routing,
    CarouselModule.forRoot(),

  ],
  declarations: [HomeComponent, GalleryComponent, HotofferoftodayComponent, SignupComponent, ProducttabComponent, GiftvoucherComponent, LatestComponent, OurbrandsComponent, DontmissofferComponent]
})
export class HomeModule { }
