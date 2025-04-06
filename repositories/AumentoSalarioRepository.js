import Database from "../db/database.js"

export default class AumentoSalarioRepository {

    #banco

    constructor() {
        this.#banco = new Database();
    }


    async GerarAumentoSalario (entidade) {
        let sql = `INSERT INTO tb_aumentosalario (aus_data, aus_percentual, usu_id) VALUES (?,?,?)`;
        let valores = [entidade.data, entidade.percentual, entidade.usu_id];
        let resultado = await this.#banco.ExecutaComandoNonQuery(sql,valores);
        return resultado;
    }
}