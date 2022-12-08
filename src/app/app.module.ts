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
import { ImageTeamComponent } from './image-team/image-team.component';
import { OurTeamComponent } from './our-team/our-team.component';




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
    ImageTeamComponent,
    OurTeamComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
