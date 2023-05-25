class Telefono {
    private _tipo: string;
    private _numero: string;
  
    constructor(tipo: string, numero: string) {
      this._tipo = tipo;
      this._numero = numero;
    }
  
    // Getters
    get tipo(): string {
      return this._tipo;
    }
  
    get numero(): string {
      return this._numero;
    }
  
    // Mostraremos los datos del teléfono en forma de lista
    toString(): string {
      return `${this.tipo}: ${this.numero}`;
    }
  }
  
  export default Telefono;
  