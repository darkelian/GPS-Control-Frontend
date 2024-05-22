import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SplashComponent } from './splash/splash.component';
import { HomeComponent } from './home/home.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { LayoutComponent } from './layout/layout.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    HomeComponent,
    LayoutComponent,
    CardComponent,
    TableComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFullpageModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
