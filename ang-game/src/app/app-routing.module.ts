import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './views/carousel/carousel.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path:"header", component:HeaderComponent},
  {path:"home", component: HomeComponent},
  {path:"carousel", component:CarouselComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
