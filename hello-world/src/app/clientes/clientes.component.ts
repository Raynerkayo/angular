import { Component, OnInit } from '@angular/core';
import {Cliente} from '../cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  title = 'Hello World';
  clientes = [];

  // aqui é como se fosse o new Cliente no java.
  cliente: Cliente = {
    nome: '',
    idade: null
  };

  addNome() {
    this.clientes.push(this.cliente);
  }

  constructor() { }

  // este método é executado assim que a página abrir.
  ngOnInit() {
  }

}
