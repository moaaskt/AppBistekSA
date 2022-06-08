import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  carrinho: any;
  produtos: any;

   produtoCarrinho: any;




   
  ionViewDidEnter() {
    this.carrinho = JSON.parse(localStorage.getItem('carrinho'));
  }


  SelecionarProduto(item:  string) {
    this.carrinho.push(Tab3Page, {produtos:  item});
  }
}
