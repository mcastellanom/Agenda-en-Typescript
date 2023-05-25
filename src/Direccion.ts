class Direccion {
    private _calle: string;
    private _numero: number;
    private _piso: string;
    private _letra: string;
    private _codigoPostal: string;
    private _ciudad: string;
    private _provincia: string;
  
    constructor(
      calle: string,
      numero: number,
      piso: string,
      letra: string,
      codigoPostal: string,
      ciudad: string,
      provincia: string
    ) {
      this._calle = calle;
      this._numero = numero;
      this._piso = piso;
      this._letra = letra;
      this._codigoPostal = codigoPostal;
      this._ciudad = ciudad;
      this._provincia = provincia;
    }
  
    // Getters
    get calle(): string {
      return this._calle;
    }
  
    get numero(): number {
      return this._numero;
    }
  
    get piso(): string {
      return this._piso;
    }
  
    get letra(): string {
      return this._letra;
    }
  
    get codigoPostal(): string {
      return this._codigoPostal;
    }
  
    get ciudad(): string {
      return this._ciudad;
    }
  
    get provincia(): string {
      return this._provincia;
    }
  
    // Mostraremos los datos de la dirección en forma de lista
    toString(): string {
      return `${this.calle}, ${this.numero}, ${this.piso}, ${this.letra}, ${this.codigoPostal}, ${this.ciudad}, ${this.provincia}`;
    }
  }
  
  export default Direccion;
  