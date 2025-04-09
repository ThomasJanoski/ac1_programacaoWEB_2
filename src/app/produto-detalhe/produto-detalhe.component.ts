import { Component, OnInit } from '@angular/core';
import { ListaProdutos, Produto } from '../modules/produtos.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  imports: [],
  templateUrl: './produto-detalhe.component.html',
  styleUrl: './produto-detalhe.component.css'
})
export class ProdutoDetalheComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  InfoProduto: Produto = {} as Produto;

  ngOnInit(): void {
    const id = this.route.snapshot.queryParams['id'];
    this.InfoProduto = ListaProdutos.find((produto) => produto.id == id) as Produto;
  }
}
