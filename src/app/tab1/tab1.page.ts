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

  produtos = [];
  carrinho = [];
  quantidadeTotal = 0;

  constructor() {}

  ionViewDidEnter() {
    this.produtos = JSON.parse(localStorage.getItem('produtos'));
    this.carrinho = JSON.parse(localStorage.getItem('carrinho'));
    this.calcularQuantidadeTotal();
  }

  addCart(produto) {
    if (produto.quantidade === 0) {
      return;
    } else {
      let produtoCarrinho = this.carrinho.find(item => item.nome === produto.nome);

      if (produtoCarrinho) {
        produtoCarrinho.quantidade += 1;
      } else {
        produtoCarrinho = {
          nome: produto.nome,
          imagem: produto.imagem,
          preco: produto.preco,
          quantidade: 1
        };
        this.carrinho.push(produtoCarrinho);
      }

      produto.quantidade -= 1;
      confirm("Tem certeza disso?");
      localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
      localStorage.setItem('produtos', JSON.stringify(this.produtos));
      this.calcularQuantidadeTotal();
    }
  }

  calcularQuantidadeTotal() {
    this.quantidadeTotal = this.carrinho.reduce((total, produto) => total + produto.quantidade, 0);
  }

  delete(produto) {
    this.produtos.splice(this.produtos.indexOf(produto), 1);
    localStorage.setItem('produtos', JSON.stringify(this.produtos));
  }
}
