import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  title = 'Hello World';
  nomes = [];
  nome = '';

  addNome() {
    this.nomes.push(this.nome);
  }

  constructor() { }

  // este método é executado assim que a página abrir.
  ngOnInit() {
  }

}
