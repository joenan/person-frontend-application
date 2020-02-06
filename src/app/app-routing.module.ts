import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { LoginComponent } from './login/login.component';
import { PersonAddComponent } from './person/person-add/person-add.component';


const routes: Routes = [
  {path:'', component: LoginComponent},

  {path:'home', component:HomeComponent,
  children: [
    { path: '', component: PersonListComponent },
    { path: 'add-person', component: PersonAddComponent },
    { path: 'person-list', component: PersonListComponent },
  ]
},
// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
