import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnInit {

  @Input() name: string = ''
  @Input() image: string = ''
  @Input() price: string = ''
  @Input() stores: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
