import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { RdvComponent } from './rdv/rdv.component';
import { AddRdvComponent } from './rdv/add-rdv/add-rdv.component';
import { UpdateRdvComponent } from './rdv/update-rdv/update-rdv.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';





const Routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent},
  {path: 'signup', component:SignUpComponent},
  {path: 'login', component:SignInComponent},
  {path: 'update-user/:id', component:UserUpdateComponent},
  
  {path: 'rdv', component: RdvComponent},
  {path: 'addrdv', component: AddRdvComponent},
  {path: 'update-rdv/:id', component: UpdateRdvComponent},

  {path: 'doctors', component: DoctorsComponent},

  {path: '**', component: PageNotFoundComponent},
  
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
