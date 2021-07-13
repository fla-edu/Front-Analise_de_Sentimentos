import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WebserviceService {
  URL_SERVER: string = 'http://53d1df1b4791.ngrok.io/';

  constructor(private http: HttpClient) { }

  public async busca(word: string) {
    return await this.get('busca', word);
  }

  public async analise(url: string, lojas: string) {
    return await this.get(`analise?url=${url}&lojas=${lojas}`);
  }

  public async estrelas() {
    return await this.get('estrelas', '0');
  }

  public async polaridade() {
    return await this.get('polaridade');
  }

  public async lojas() {
    return await this.get('lojas');
  }

  public async pontosNMF() {
    return await this.get('pontos_nmf?inicio=1&fim=3&componentes=10');
  }

  public async comentariosOcorrencia() {
    return await this.get('pontos_vetor?inicio=2&fim=3');
  }

  private async get(endpoint: string, id?: string) {
    // TODO: ADD HEADER DE AUTENTICAÇÃO
    if (id)
      return await this.http.get<any>(`${this.URL_SERVER}${endpoint}/${id}` ).toPromise();
    return await this.http.get<any>(`${this.URL_SERVER}${endpoint}`).toPromise();
  }

}