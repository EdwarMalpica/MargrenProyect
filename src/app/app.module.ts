import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { TitleComponent } from './title/title.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';

import { FooterComponent } from './footer/footer.component';
import { IconNetworksComponent } from './icon-networks/icon-networks.component';
import { InfoPhoneComponent } from './info-phone/info-phone.component';
import { InfoMailComponent } from './info-mail/info-mail.component';
import { InfoLocateComponent } from './info-locate/info-locate.component';
import { InfoTimeComponent } from './info-time/info-time.component';
import { CompanieComponent } from './companie/companie.component';
import { AccountComponent } from './account/account.component';
import { DownloadComponent } from './download/download.component';
import { CopyrightComponent } from './copyright/copyright.component';

import { RegisterComponent } from './register/register.component';
import { RegisterTitleComponent } from './register-title/register-title.component';
import { InputTextComponent } from './input-text/input-text.component';
import { TipeDocumentComponent } from './tipe-document/tipe-document.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LabelComponent } from './label/label.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    TitleComponent,
    MenuNavComponent,
    MenuLoginComponent,
    FooterComponent,
    IconNetworksComponent,
    InfoPhoneComponent,
    InfoMailComponent,
    InfoLocateComponent,
    InfoTimeComponent,
    CompanieComponent,
    AccountComponent,
    DownloadComponent,
    CopyrightComponent,
    RegisterComponent,
    RegisterTitleComponent,
    InputTextComponent,
    TipeDocumentComponent,
    ProductsComponent,
    CardComponent,
    UserDashboardComponent,
    LabelComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
