import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/security/login/login.component';

export const ROUTES: Routes = [

  // primeira rota, vai ser a rota vazia. quando não digitar nada, vamos para a tela home.
  {path: '', component: HomeComponent},

  // vai para a tela de login.
  {path: 'login', component : LoginComponent }
];

// devo importar em app.module.ts o routes
export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);
