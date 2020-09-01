import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ROUTES, RouterModule, Route, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GithubService} from './github.service';
import { ProfileService} from './profile.service'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';

import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA]
})
export class AppModule { }