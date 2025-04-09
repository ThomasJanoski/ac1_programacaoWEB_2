import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produtos/produtos.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { SobreComponent } from './sobre/sobre.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "produtos", component: ProdutoComponent },
    { path: "produto-detalhe", component: ProdutoDetalheComponent },
    { path: "sobre", component: SobreComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];