import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { TitleComponent } from './title/title.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterTitleComponent } from './register-title/register-title.component';
import { InputTextComponent } from './input-text/input-text.component';
import { TipeDocumentComponent } from './tipe-document/tipe-document.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    TitleComponent,
    MenuNavComponent,
    MenuLoginComponent,
    RegisterComponent,
    RegisterTitleComponent,
    InputTextComponent,
    TipeDocumentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
