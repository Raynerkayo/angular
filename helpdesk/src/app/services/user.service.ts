import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../model/user.model';
import { HELP_DESK_API } from './helpdesk.api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private htpp: HttpClient) {}

  // se for método post eu  depois do this.http
  login(user: User) {
    return this.htpp.post(`${HELP_DESK_API}/api/caminho/autenticao`, user);
  }

  createOrUpdate(user: User){
    // depois verificar !== se causa o erro ou não
    if (user.id != null && user.id !== '') {
      return this.htpp.put(`${HELP_DESK_API}/api/caminho/usuario`, user);
    } else {
      user.id = null;
      return this.htpp.post(`${HELP_DESK_API}/api/caminho/usuario`, user);
    }
  }

  // encontar a página e quantidade de registros. isso varia para cada API.
  findAll(page: number, count: number) {
    return this.htpp.get(`${HELP_DESK_API}/api/caminho/usuario/${page}/${count}`);
  }

  findById(id: string){
    return this.htpp.get(`${HELP_DESK_API}/api/caminho/usuario/${id}`);
  }

  delete(id: string){
    return this.htpp.delete(`${HELP_DESK_API}/api/caminho/usuario/${id}`);
  }

}
