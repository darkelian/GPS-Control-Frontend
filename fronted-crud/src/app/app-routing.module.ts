import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', component: SplashComponent },
  //{ path: 'home', component: HomeComponent },
  { path: 'home', component: LayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
