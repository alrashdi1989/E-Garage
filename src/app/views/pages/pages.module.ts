import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import {
  ButtonModule,
  CardModule,
  CarouselModule,
  DatePickerModule,
  FormModule,
  GridModule,
} from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './home/home.component';
import { NewAdComponent } from './new-ad/new-ad.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    HomeComponent,
    NewAdComponent,
  ],
  imports: [
    HttpClientModule,
    CarouselModule,
    TranslateModule,
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    DatePickerModule,
  ],
  exports: [TranslateModule],
})
export class PagesModule {}
