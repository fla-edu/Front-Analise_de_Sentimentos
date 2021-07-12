import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../../../services/webservice.service';
import { IItens } from '../../interfaces/IItens';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchWord: string = '';
  itens: IItens[] = []
  constructor(
    private ws: WebserviceService,
  ) { }

  ngOnInit(): void {
  }

  async search() {
    this.itens = await this.ws.busca(this.searchWord);
  }

}
