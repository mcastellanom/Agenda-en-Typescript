"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
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
    get nombre() {
        return this._nombre;
    }
    get apellidos() {
        return this._apellidos;
    }
    get edad() {
        return this._edad;
    }
    get dni() {
        return this._dni;
    }
    get cumpleanos() {
        return this._cumpleanos;
    }
    get colorFavorito() {
        return this._colorFavorito;
    }
    get sexo() {
        return this._sexo;
    }
    get direcciones() {
        return this._direcciones;
    }
    get mails() {
        return this._mails;
    }
    get telefonos() {
        return this._telefonos;
    }
    get notas() {
        return this._notas;
    }
    // Añadiremos una dirección
    agregarDireccion(direccion) {
        this._direcciones.push(direccion);
    }
    // Añadiremos un mail
    agregarMail(mail) {
        this._mails.push(mail);
    }
    // Añadiremos un teléfono
    agregarTelefono(telefono) {
        this._telefonos.push(telefono);
    }
    // Mostraremos los datos de la persona en forma de lista
    toString() {
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
exports.default = Persona;
