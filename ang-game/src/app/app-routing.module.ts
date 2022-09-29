import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './views/cards/cards.component';
import { CarouselComponent } from './views/carousel/carousel.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { Index1Component } from './views/index1/index1.component';
import { Index2Component } from './views/index2/index2.component';
import { Index3Component } from './views/index3/index3.component';

const routes: Routes = [
  {path:"header", component:HeaderComponent},
  {path:"home", component: HomeComponent},
  {path:"carousel", component:CarouselComponent},
  {path:"cards", component: CardsComponent},
  {path:"footer", component: FooterComponent},
  {path:"index1", component: Index1Component},
  {path:"index2", component: Index2Component},
  {path:"index2", component: Index3Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
