import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/security/login/login.component';
import { routes } from './app.routes';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { UserService } from './services/user.service';
import { SharedService } from './services/shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routes,
    FormsModule,
    // como o login usa o HttpClient, eu preciso importar ele aqui, caso contrário da erro.
    HttpClientModule
  ],
  providers: [UserService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
