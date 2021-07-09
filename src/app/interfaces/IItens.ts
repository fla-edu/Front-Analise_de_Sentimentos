export interface IItens {
  Nome: string,
  Url: string,
  Img: string,
  Preco: string,
  Lojas: string
}

export class Itens implements IItens{
  Nome = ''
  Url = ''
  Img = ''
  Preco = ''
  Lojas = ''
}