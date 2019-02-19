import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Olá Mundo!';
  nomes = [];
  nome = '';

  addNome() {
    this.nomes.push(this.nome);
  }


}
