import { EChartsOption } from "echarts"

export interface IStars {
  Nota_Usuario_1 : number,
  Nota_Usuario_2 : number,
  Nota_Usuario_3 : number,
  Nota_Usuario_4 : number,
  Nota_Usuario_5 : number,
  Nota_Sistema_1 : number,
  Nota_Sistema_2 : number,
  Nota_Sistema_3 : number,
  Nota_Sistema_4 : number,
  Nota_Sistema_5 : number,
}

export class Stars implements IStars{
  Nota_Usuario_1 = 0
  Nota_Usuario_2 = 0
  Nota_Usuario_3 = 0
  Nota_Usuario_4 = 0
  Nota_Usuario_5 = 0
  Nota_Sistema_1 = 0
  Nota_Sistema_2 = 0
  Nota_Sistema_3 = 0
  Nota_Sistema_4 = 0
  Nota_Sistema_5 = 0
}

export interface IPolaridade {
  Comentario_Positivo: string,
  Nome_Comentario_Pos: string,
  Porcentagem_Positivo: number
  Comentario_Negativo: string,
  Nome_Comentario_Neg: string,
  Porcentagem_Negativo: number
}

export class Polaridade implements IPolaridade {
  Comentario_Positivo = ''
  Nome_Comentario_Pos = ''
  Porcentagem_Positivo = 0
  Comentario_Negativo = ''
  Nome_Comentario_Neg = ''
  Porcentagem_Negativo = 0
}

export interface IPontosNMF {
  Polaridade_Positiva: string[]
  Polaridade_Negativa: string[]
}

export interface IPolaridadeComentarios {
  Positivo: string
  Negativo: string
}

export interface IComentariosOcorrencia {
  Comentario: string
  Ocorrencia: number
}

export interface ILojas {
  Preço: string[]
  Entrega: string[]
  Atendimento: string[]
}

export interface ILojasTable {
  Posicao: number
  Preco: string
  Entrega: string
  Atendimento: string
}
