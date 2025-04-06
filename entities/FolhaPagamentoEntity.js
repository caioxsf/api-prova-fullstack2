import BaseEntity from "./BaseEntity.js";

export default class FolhaPagamentoEntity extends BaseEntity {

    #id
    #ano
    #mes
    #total

    constructor(id,ano,mes,total) {
        super();
        this.#id = id;
        this.#ano = ano;
        this.#mes = mes;
        this.#total = total;
    }

    get id () {return this.#id} set id (value) {this.#id = value}
    get ano () {return this.#ano} set ano (value) {this.#ano = value}
    get mes () {return this.#mes} set mes (value) {this.#mes = value}
    get total () {return this.#total} set total (value) {this.#total = value}
}