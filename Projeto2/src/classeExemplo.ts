class Carro {
  private _nome: string;
  private _fabricante: string;

  constructor(nome: string, fabricante: string) {
    console.log("contruiu por aqui");
    this._nome = nome;
    this._fabricante = fabricante;
  }
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    console.log("setou por aqui");
    this._nome = value;
  }
  public get fabricante(): string {
    return this._fabricante;
  }
  public set fabricante(value: string) {
    this._fabricante = value;
  }
}

let c1 = new Carro("Palio", 'Fiat');
c1.nome = "PALIO";
console.log(c1);