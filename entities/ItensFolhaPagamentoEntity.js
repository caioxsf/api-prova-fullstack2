import BaseEntity from "./BaseEntity.js";

export default class IntensFolhaPagamentoEntity extends BaseEntity{

    #id
    #salario
    #fun_id
    #fol_id

    constructor(id,salario,fun_id,fol_id) {
        super();
        this.#id = id;
        this.#salario = salario;
        this.#fun_id = fun_id;
        this.#fol_id = fol_id
    }

    get id () {return this.#id} set id (value) {this.#id = value}
    get salario () {return this.#salario} set salario (value) {this.#salario = value}
    get fun_id () {return this.#fun_id} set fun_id (value) {this.#fun_id = value}
    get fol_id () {return this.#fol_id} set fol_id (value) {this.#fol_id = value}

}