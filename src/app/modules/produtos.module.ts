import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  emEstoque: boolean;
}

export const DestaquesSemana = [2, 4, 7]

export const ListaProdutos = [
  { id: 1, nome: 'Óleo Essencial de Lavanda', preco: 49.90, descricao: 'Óleo essencial de lavanda pura, ideal para aromaterapia e relaxamento.', emEstoque: false },
  { id: 2, nome: 'Sabonete Artesanal de Alecrim', preco: 19.90, descricao: 'Sabonete artesanal feito com óleo essencial de alecrim.', emEstoque: true },
  { id: 3, nome: 'Vela Aromática de Canela', preco: 29.90, descricao: 'Vela aromática feita com cera de abelha e óleo essencial de canela.', emEstoque: true },
  { id: 4, nome: 'Difusor de Aromas de Bambu', preco: 39.90, descricao: 'Difusor de aromas feito de bambu, ideal para ambientes pequenos.', emEstoque: true },
  { id: 5, nome: 'Óleo Essencial de Eucalipto', preco: 44.90, descricao: 'Óleo essencial de eucalipto com propriedades revigorantes e purificadoras.', emEstoque: false },
  { id: 6, nome: 'Sabonete Artesanal de Mel e Aveia', preco: 24.90, descricao: 'Sabonete artesanal hidratante com mel e aveia, perfeito para peles sensíveis.', emEstoque: true },
  { id: 7, nome: 'Vela Aromática de Baunilha', preco: 34.90, descricao: 'Vela com aroma de baunilha, ideal para criar um ambiente aconchegante.', emEstoque: true },
  { id: 8, nome: 'Kit de Sais de Banho Relaxante', preco: 49.90, descricao: 'Kit com sais de banho enriquecidos com óleos essenciais para relaxamento.', emEstoque: true },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProdutosModule { }