import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  produto: any = {
    nome: '',
    imagem: '',
    preco: 0,
    quantidade: ''
  };

  produtos = [];

  constructor() {}



  
  // ngOnInit() { // executado ao carregar a tela
  //   this.produtos = JSON.parse(localStorage.getItem('produtos'));
  // }

  criar() {
    this.produtos.push(Object.assign({}, this.produto));
    localStorage.setItem('produtos', JSON.stringify(this.produtos))  // salva informações
    alert("Produto Cadastrado com Sucesso")
    this.clean()
   
  }


  clean(){
    this.produto.nome = "",
    this.produto.imagem = "";
    this.produto.preco = "";
    this.produto.quantidade = ""

    }
    

}