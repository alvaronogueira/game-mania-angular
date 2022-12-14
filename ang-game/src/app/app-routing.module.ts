import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './views/carousel/carousel.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { Index1Component } from './views/index1/index1.component';
import { Index2Component } from './views/index2/index2.component';
import { Index3Component } from './views/index3/index3.component';
import { LoginComponent } from './views/login/login.component';
import { TempCarouselComponent } from './views/temp-carousel/temp-carousel.component';

const routes: Routes = [
  {path:"header", component:HeaderComponent},
  {path:"carousel", component:CarouselComponent},
  {path:"home", component: HomeComponent},
  {path:"index1", component: Index1Component},
  {path:"index2", component: Index2Component},
  {path:"index3", component: Index3Component},
  {path:"footer", component: FooterComponent},
  {path:"carousel2", component: TempCarouselComponent},
  {path:"login", component: LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
