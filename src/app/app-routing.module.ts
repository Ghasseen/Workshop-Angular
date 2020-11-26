import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';





const Routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},

  {path: 'signup', component: UserComponent,
  children: [{path: '', component:SignUpComponent}]
  },

  {path: 'login', component: UserComponent,
  children: [{path: '', component:SignInComponent}]
  },

  //{path: 'sallelist/salle/:id', component: SalleComponent},
  //{path: '**', component: PqgeNotFoundComponent},

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
