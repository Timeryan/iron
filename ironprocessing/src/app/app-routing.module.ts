import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoodsPageComponent} from './pages/goods-page/goods-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {GoodPageComponent} from './pages/good-page/good-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {IndividualPageComponent} from './pages/individual-page/individual-page.component';
import {FaqPageComponent} from './pages/faq-page/faq-page.component';
import {AdminPageComponent} from './pages/admin-page/admin-page.component';

const routes: Routes = [
  { path: 'goods', component: GoodsPageComponent},
  { path: 'good/:id/:titleUrl', component: GoodPageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'individual/:id', component: IndividualPageComponent},
  { path: 'faq', component: FaqPageComponent},
  { path: 'admin', component: AdminPageComponent},
  { path: '', component: HomePageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
