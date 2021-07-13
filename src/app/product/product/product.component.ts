import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { WebserviceService } from '../../../services/webservice.service';
import { ILojas, ILojasTable, IPolaridade, IPolaridadeComentarios, IPontosNMF, IStars, Polaridade, Stars } from './IProduct';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  chartOption: EChartsOption = {}

  stars: IStars = new Stars()
  polaridade: IPolaridade = new Polaridade()
  pontosNMF: IPolaridadeComentarios[] = []
  comentariosOcorrencia: IPolaridadeComentarios[] = []
  lojas: ILojasTable[] = []
  analise: any
  carregou: boolean = false
  nome: string = ''
  imagem: string = ''

  constructor(
    private ws: WebserviceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.get()
  }

  async get() {
    await this.getAnalise()
    this.getStars()
    this.createEchartOption()
    this.getPolaridade()
    this.getPontosNMF()
    this.getComentariosOcorrencia()
    await this.getLojas()
  }

  async getAnalise() {
    let lojas = ''
    let url = ''
    this.route.queryParams.subscribe(params => {
      lojas = params['lojas'];
      url = params['url'];
      this.imagem = params['img'];
      this.nome = params['nome'];
    });

    this.analise = await this.ws.analise(url, lojas);
  }


  async getStars() {
    this.stars = await this.ws.estrelas();
  }

  async getPontosNMF() {
    const pontosNMF: IPontosNMF = await this.ws.pontosNMF();

    pontosNMF.Polaridade_Positiva.forEach((el, ix) => {
      this.pontosNMF.push({ 
        Negativo: pontosNMF.Polaridade_Negativa[ix],
        Positivo: pontosNMF.Polaridade_Positiva[ix],
      })
    })
  }

  async getComentariosOcorrencia() {
    const pontosNMF: IPontosNMF = await this.ws.comentariosOcorrencia();

    pontosNMF.Polaridade_Positiva.forEach((el, ix) => {
      this.comentariosOcorrencia.push({ 
        Negativo: pontosNMF.Polaridade_Negativa[ix],
        Positivo: pontosNMF.Polaridade_Positiva[ix],
      })
    })
  }

  async getLojas() {
    const lojas: ILojas[] = await this.ws.lojas();

    if(!(lojas && lojas[0])) return
    
    lojas[0].Preço.forEach((el, ix) => {
      this.lojas.push({ 
        Posicao: ix + 1,
        Preco: lojas[0].Preço[ix],
        Entrega: lojas[1].Entrega[ix],
        Atendimento: lojas[2].Atendimento[ix]
      })
    })

    this.carregou = true
  }

  async getPolaridade() {
    this.polaridade = await this.ws.polaridade();
    this.createEchartOption(
      this.convertValueToFixed2(this.polaridade.Porcentagem_Positivo), 
      this.convertValueToFixed2(this.polaridade.Porcentagem_Negativo)
    )
  }

  convertValueToFixed2(value: any): number {
    return +parseFloat(value).toFixed(2)
  }

  createEchartOption(porcentagemPositivo: number = 0, porcentagemNegativo: number = 0) {
    this.chartOption = {
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          data: [
            {value: porcentagemPositivo, name: 'Positivo'},
            {value: porcentagemNegativo, name: 'Negativo'},
          ],
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          type: 'pie',
          color: ['#79da75', '#ff3030'],
          label: {
            show: false,
            position: 'center'
          },
        },
      ],
      label: {
        show: true,
        position: 'inside',
        rotate: 0,
        fontSize: 12
      },
    };
  }
}
