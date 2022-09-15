import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosProdutosService } from 'src/app/services/dados-produtos.service';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.page.html',
  styleUrls: ['./detalhes-produtos.page.scss'],
})
export class DetalhesProdutosPage implements OnInit {

  // img : any = "assets/icon/aliamento.gif"
  img_1 : any = "assets/icon/rodas.png"

  public produtoselecionado : any
  public modoDeEdicao = false
 

  constructor(
    private route : ActivatedRoute,
    private produto : DadosProdutosService
  ) { }

  iniciarEdicao() {
    this.modoDeEdicao = true
  }

  encerrarEdicao() {
    this.modoDeEdicao = false
  }

  ngOnInit() {
    const id: number = Number (this.route.snapshot.paramMap.get('id'))
    this.produtoselecionado = this.produto.enviardadosid(id)

  }
}
