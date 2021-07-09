import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WebserviceService {
  URL_SERVER: string = 'http://4fc05dc07f9e.ngrok.io/';

  // http://api.bonoacesso.b2ml.com.br/api/
  constructor(private http: HttpClient) { }

  public async searchWord(word: string) {
    return await this.get('index/pesquisa', word);
  }

  private async get(endpoint: string, id?: string) {
    // TODO: ADD HEADER DE AUTENTICAÇÃO
    if (id)
      return await this.http.get<any>(`${this.URL_SERVER}${endpoint}/${id}` ).toPromise();
    return await this.http.get<any>(`${this.URL_SERVER}${endpoint}`).toPromise();
  }

}