import Direccion from "./Direccion";
import Mail from "./Mail";
import Telefono from "./Telefono";

class Persona {
  private _nombre: string;
  private _apellidos: string;
  private _edad: number;
  private _dni: string;
  private _cumpleanos: string;
  private _colorFavorito: string;
  private _sexo: string;
  private _direcciones: Direccion[];
  private _mails: Mail[];
  private _telefonos: Telefono[];
  private _notas: string;

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumpleanos: string,
    colorFavorito: string,
    sexo: string,
    direcciones: Direccion[],
    mails: Mail[],
    telefonos: Telefono[],
    notas: string
  ) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._edad = edad;
    this._dni = dni;
    this._cumpleanos = cumpleanos;
    this._colorFavorito = colorFavorito;
    this._sexo = sexo;
    this._direcciones = direcciones;
    this._mails = mails;
    this._telefonos = telefonos;
    this._notas = notas;
  }

  // Getters
  get nombre(): string {
    return this._nombre;
  }

  get apellidos(): string {
    return this._apellidos;
  }

  get edad(): number {
    return this._edad;
  }

  get dni(): string {
    return this._dni;
  }

  get cumpleanos(): string {
    return this._cumpleanos;
  }

  get colorFavorito(): string {
    return this._colorFavorito;
  }

  get sexo(): string {
    return this._sexo;
  }

  get direcciones(): Direccion[] {
    return this._direcciones;
  }

  get mails(): Mail[] {
    return this._mails;
  }

  get telefonos(): Telefono[] {
    return this._telefonos;
  }

  get notas(): string {
    return this._notas;
  }

  // Añadiremos una dirección
  agregarDireccion(direccion: Direccion): void {
    this._direcciones.push(direccion);
  }

  // Añadiremos un mail
  agregarMail(mail: Mail): void {
    this._mails.push(mail);
  }

  // Añadiremos un teléfono
  agregarTelefono(telefono: Telefono): void {
    this._telefonos.push(telefono);
  }

  // Mostraremos los datos de la persona en forma de lista
  toString(): string {
    let result = `Nombre: ${this.nombre} ${this.apellidos}\n`;
    result += `Edad: ${this.edad}\n`;
    result += `DNI: ${this.dni}\n`;
    result += `Fecha de nacimiento: ${this.cumpleanos}\n`;
    result += `Color favorito: ${this.colorFavorito}\n`;
    result += `Sexo: ${this.sexo}\n`;

    result += `Direcciones:\n`;
    this.direcciones.forEach((direccion) => {
      result += `  - ${direccion.toString()}\n`;
    });

    result += `Mails:\n`;
    this.mails.forEach((mail) => {
      result += `  - ${mail.toString()}\n`;
    });

    result += `Teléfonos:\n`;
    this.telefonos.forEach((telefono) => {
      result += `  - ${telefono.toString()}\n`;
    });

    result += `Notas: ${this.notas}\n`;

    return result;
  }
}

export default Persona;
