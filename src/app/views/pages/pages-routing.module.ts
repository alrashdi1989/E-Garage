import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NewAdComponent } from './new-ad/new-ad.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'pages',
    },
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      
      {
        path: 'newad',
        component: NewAdComponent,
        data: {
          title: 'New Ad',
        },
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Home',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
