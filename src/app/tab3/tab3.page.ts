import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  carrinho: any[] = [];
  quantidadeTotal: number = 0;
  valorTotal: number = 0;

  ionViewDidEnter() {
    const carrinhoData = localStorage.getItem('carrinho');
    this.carrinho = carrinhoData ? JSON.parse(carrinhoData) : [];
    this.calcularTotais();
  }

  calcularTotais() {
    this.quantidadeTotal = this.carrinho.reduce((total, produto) => total + produto.quantidade, 0);
    this.valorTotal = this.carrinho.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
  }

  finalizarCompra() {
    // Lógica para finalizar a compra, como enviar o pedido para o servidor, limpar o carrinho, etc.
    this.carrinho = [];
    localStorage.removeItem('carrinho');
    this.calcularTotais();
  }
}
