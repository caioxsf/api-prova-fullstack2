import BaseEntity from "./BaseEntity.js";

export default class FuncionarioEntity extends BaseEntity {


    #id
    #cpf
    #nome
    #salario
    #data_admissao
    #data_demissao
    #car_id

    constructor(id,cpf,nome,salario,data_admissao,data_demissao,car_id) {
        super();
        this.#id = id;
        this.#cpf = cpf;
        this.#nome = nome;
        this.#salario = salario;
        this.#data_admissao = data_admissao;
        this.#data_demissao = data_demissao;
        this.#car_id = car_id;
    }

    get id () {return this.#id} set id (value) {this.#id = value};
    get cpf () {return this.#cpf} set cpf (value) {this.#cpf = value};
    get nome () {return this.#nome} set nome (value) {this.#nome = value};
    get salario () {return this.#salario} set salario (value) {this.#salario = value};
    get data_admissao () {return this.#data_admissao} set data_admissao (value) {this.#data_admissao = value};
    get data_demissao () {return this.#data_demissao} set data_demissao (value) {this.#data_demissao = value};
    get car_id () {return this.#car_id} set car_id (value) {this.#car_id = value};

}