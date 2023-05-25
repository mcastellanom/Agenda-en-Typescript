class Mail {
    private _tipo: string;
    private _direccion: string;
  
    constructor(tipo: string, direccion: string) {
      this._tipo = tipo;
      this._direccion = direccion;
    }
  
    // Getters
    get tipo(): string {
      return this._tipo;
    }
  
    get direccion(): string {
      return this._direccion;
    }
  
    // Mostraremos los datos del mail en forma de lista
    toString(): string {
      return `${this.tipo}: ${this.direccion}`;
    }
  }
  
  export default Mail;
  