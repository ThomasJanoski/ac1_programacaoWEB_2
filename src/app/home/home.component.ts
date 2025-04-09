import { Component, OnInit } from '@angular/core';
import { ListaProdutos, Produto, DestaquesSemana } from '../modules/produtos.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  DestaquesSemana: number[] = DestaquesSemana;
  ListaProdutos: Produto[] = ListaProdutos;

  showBanner: boolean = true;

  ngOnInit(): void {
    const storageBanner = localStorage.getItem("showBanner");
    this.showBanner = storageBanner ? JSON.parse(storageBanner) : true;
  }

  pegarProdutoPorID(id: number) {
    return this.ListaProdutos.find((produto) => produto.id == id && produto.emEstoque);
  }

  toggleBanner() {
    this.showBanner = !this.showBanner;
    localStorage.setItem("showBanner", JSON.stringify(this.showBanner));
  }

  redirecionarProdutoDetalhe(id: number) {
    this.router.navigate(['/produto-detalhe'], { queryParams: { id } });
  }
}
