import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RdvComponent } from './rdv/rdv.component';
import { UpdateRdvComponent } from './rdv/update-rdv/update-rdv.component';
import { AddRdvComponent } from './rdv/add-rdv/add-rdv.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    HeadComponent,
    FooterComponent,
    DoctorsComponent,
    RdvComponent,
    UpdateRdvComponent,
    AddRdvComponent,
    UserUpdateComponent,
    WeatherWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true,
      positionClass: 'toast-bottom-right',
      progressAnimation: 'increasing',
      preventDuplicates: true
    }
    )
    
  ],
  providers: [],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
