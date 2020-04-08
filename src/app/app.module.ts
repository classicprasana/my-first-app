import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { BtnComponent } from './components/btn/btn.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ClassComponent } from './componets/class/class.component';
import { HomeComponent } from './componets/home/home.component';
import { AboutComponent } from './componets/about/about.component';
//import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    ProfileComponent,
    ClassComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
