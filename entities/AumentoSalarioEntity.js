import BaseEntity from "./BaseEntity.js"

export default class AumentoSalarioEntity extends BaseEntity {

    #id
    #data
    #percentual
    #usu_id

    constructor(id,data,percentual,usu_id) {
        super();
        this.#id = id;
        this.#data = data;
        this.#percentual = percentual;
        this.#usu_id = usu_id;
    }

    get id () {return this.#id} set id (value) {this.#id = value}
    get data () {return this.#data} set data (value) {this.#data = value}
    get percentual () {return this.#percentual} set percentual (value) {this.#percentual = value}
    get usu_id () {return this.#usu_id} set usu_id (value) {this.#usu_id = value}

}