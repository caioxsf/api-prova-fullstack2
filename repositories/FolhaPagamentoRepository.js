import Database from "../db/database.js"

export default class FolhaPagamentoRepository {

    #banco
    constructor() {
        this.#banco = new Database();
    }

    async GerarFolhaPagamento (entidade) {
        let sql = `INSERT INTO tb_folhapagamento (fol_ano, fol_mes) VALUES (?,?)`;
        let valores = [entidade.ano, entidade.mes];
        let resultado = await this.#banco.ExecutaComandoLastInserted(sql,valores);
        return resultado;
    }

    async ItensFolhaPagamento (entidade) {
        let sql = `INSERT INTO tb_itensfolhapagamento (ifp_salario, fun_id, fol_id) VALUES (?,?,?)`;
        let valores = [entidade.salario, entidade.fun_id, entidade.fol_id]
        let resultado = await this.#banco.ExecutaComandoNonQuery(sql,valores);
        return resultado;
    }

    async AtualizarSalarioTotal (total, id) {
        let sql = `UPDATE tb_folhapagamento SET fol_valortotal = ? WHERE fol_id = ?`;
        let valores = [total, id];
        let resultado = await this.#banco.ExecutaComandoNonQuery(sql,valores);
        return resultado;
    }

}