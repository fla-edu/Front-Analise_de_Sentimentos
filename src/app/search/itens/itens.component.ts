import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnInit {

  @Input() name: string = ''
  @Input() url: string = ''
  @Input() image: string = ''
  @Input() price: string = ''
  @Input() stores: string = ''
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verProduto() {
    this.router.navigateByUrl(`/product?lojas=${this.stores}&url=${this.url}`);
  }

}
