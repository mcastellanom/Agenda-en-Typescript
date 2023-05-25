"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mail {
    constructor(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    // Getters
    get tipo() {
        return this._tipo;
    }
    get direccion() {
        return this._direccion;
    }
    // Mostraremos los datos del mail en forma de lista
    toString() {
        return `${this.tipo}: ${this.direccion}`;
    }
}
exports.default = Mail;
