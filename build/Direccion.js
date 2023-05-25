"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Direccion {
    constructor(calle, numero, piso, letra, codigoPostal, ciudad, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._ciudad = ciudad;
        this._provincia = provincia;
    }
    // Getters
    get calle() {
        return this._calle;
    }
    get numero() {
        return this._numero;
    }
    get piso() {
        return this._piso;
    }
    get letra() {
        return this._letra;
    }
    get codigoPostal() {
        return this._codigoPostal;
    }
    get ciudad() {
        return this._ciudad;
    }
    get provincia() {
        return this._provincia;
    }
    // Mostraremos los datos de la dirección en forma de lista
    toString() {
        return `${this.calle}, ${this.numero}, ${this.piso}, ${this.letra}, ${this.codigoPostal}, ${this.ciudad}, ${this.provincia}`;
    }
}
exports.default = Direccion;
