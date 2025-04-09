import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListaProdutos, Produto } from '../modules/produtos.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  imports: [CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutoComponent {
  constructor(private router: Router) { }
  ListaProdutos: Produto[] = ListaProdutos;

  redirecionarProdutoDetalhe(id: number) {
    this.router.navigate(['/produto-detalhe'], { queryParams: { id } });
  }
}
