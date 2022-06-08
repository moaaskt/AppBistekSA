import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };


  // resultado = confirm("Tem certeza disso?");

  produtos = [];
  carrinho = [];
  constructor() {}

  ionViewDidEnter() {
    this.produtos = JSON.parse(localStorage.getItem('produtos'));
  }

  addCart(produto) {

    

    
    if (produto.quantidade == 0) {
      return;
    } else
    {
      let produtoCarrinho = {
        nome: produto.nome,
        imagem: produto.imagem,
        preco: produto.preco,
        quantidade: produto.quantidade,
     
      };
      console.log(this.produtos.indexOf(produto));
      this.carrinho.push(Object.assign({}, produtoCarrinho));
      produto.quantidade -= 1;
      confirm("Tem certeza Disso?");
     
      localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
      localStorage.setItem('produtos', JSON.stringify(this.produtos));
    }
  }


  delete(produto) {
    this.produtos.splice(this.produtos.indexOf(produto), 1);
    localStorage.setItem('produtos', JSON.stringify(this.produtos));
  }


}
