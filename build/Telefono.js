"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Telefono {
    constructor(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    // Getters
    get tipo() {
        return this._tipo;
    }
    get numero() {
        return this._numero;
    }
    // Mostraremos los datos del teléfono en forma de lista
    toString() {
        return `${this.tipo}: ${this.numero}`;
    }
}
exports.default = Telefono;
