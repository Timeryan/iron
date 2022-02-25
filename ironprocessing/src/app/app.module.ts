import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { MainComponent } from './component/main/main.component';
import { MainCardComponent } from './component/main-card/main-card.component';
import { CarouselModule } from 'primeng/carousel';
import { FooterComponent } from './component/footer/footer.component';
import {AngularYandexMapsModule, YA_CONFIG, YaConfig} from 'angular8-yandex-maps';
import { GoodsPageComponent } from './pages/goods-page/goods-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GoodCardComponent } from './component/good-card/good-card.component';
import { GoodPageComponent } from './pages/good-page/good-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactCardComponent } from './component/contact-card/contact-card.component';
import { IndividualPageComponent } from './pages/individual-page/individual-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { FaqCardComponent } from './component/faq-card/faq-card.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {GalleriaModule} from 'primeng/galleria';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { OrderCardComponent } from './component/order-card/order-card.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

const mapConfig: YaConfig = {
  apikey: 'b827a36e-f58f-4feb-8961-482bb30fa1fc',
  lang: 'ru_RU',
};
registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MainCardComponent,
    FooterComponent,
    GoodsPageComponent,
    HomePageComponent,
    GoodCardComponent,
    GoodPageComponent,
    ContactPageComponent,
    ContactCardComponent,
    IndividualPageComponent,
    FaqPageComponent,
    FaqCardComponent,
    AdminPageComponent,
    OrderCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    AngularYandexMapsModule.forRoot(mapConfig),
    ReactiveFormsModule,
    NgxDropzoneModule,
    GalleriaModule,
    InfiniteScrollModule,
    ProgressSpinnerModule,
  ],
  providers: [
    {
      provide: YA_CONFIG,
      useValue: {
        apikey: 'b827a36e-f58f-4feb-8961-482bb30fa1fc',
        lang: 'ru_RU',
      },
    },
    { provide: LOCALE_ID, useValue: 'ru' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
