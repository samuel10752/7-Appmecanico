import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosProdutosService {

  private produtos = [
    {id:1 , nome:'Alinhamento' , valor:150.00 },
    {id:2 , nome:'Balanceamento' , valor:180.00  },
    {id:3 , nome:'Revisão de freios' , valor:200.00 },
    {id:4 , nome:'Revisão de Suspensão' , valor:220.00  },
  ]

  constructor() { }

  enviartodosdados() {
    return this.produtos
  }

  enviardadosid(id: number) {
    const produtoselecionado = this.produtos.filter(produto => produto.id === id)
    return  produtoselecionado[0]
  }
}