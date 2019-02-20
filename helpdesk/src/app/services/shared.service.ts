import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public static instance: SharedService = null;
  user: User;
  token: string;

  // serve para quando estiver logado, renderizar as páginas de acesso a esse cara. e fica true
  // o uso é de acordo com o <router-outlet></router-outlet>
  // quando não estiver logado, fica false e o usuário não consegue ver determinadas páginas.
  showTemplate = new EventEmitter<boolean>();

  constructor() {
    // ou retorna a instancia, caso logado, ou retorna a própria classe aqui.
    // atribuo a propria instance a ela mesma, caso seja diferente de nula. ou a classe.
    return SharedService.instance = SharedService.instance || this;
  }

  public static getInstance() {
    // se for nula é pq não está logado, aqui no caso.
    if (this.instance == null) {
      this.instance = new SharedService();
    }
    return this.instance;
  }

  isLoggedIn(): boolean {
    if ( this.user == null ) {
      return false;
    }
    return this.user.email !== '';
  }

}
