import Database from "../db/database.js"
import FuncionarioEntity from "../entities/FuncionarioEntity.js";

export default class FuncionarioRepository {

    #banco
    constructor() {
        this.#banco = new Database();
    }

    async CadastrarFuncionario(entidade) {
        let sql = ` INSERT INTO tb_funcionario (fun_cpf, fun_nome, fun_salario, fun_datadmissao, car_id)
                    VALUES (?,?,?,?,?)`;
        let valores = [entidade.cpf, entidade.nome, entidade.salario, entidade.data_admissao, entidade.car_id];
        let resultado = await this.#banco.ExecutaComandoNonQuery(sql, valores);
        return resultado;
    }

    async DemitirFuncionario(data_demissao, id) {
        let sql = `UPDATE tb_funcionario SET fun_datademissao = ? WHERE fun_id = ?`;
        let valores = [data_demissao, id];
        let resultado = await this.#banco.ExecutaComandoNonQuery(sql, valores);
        return resultado;
    }

    async Obter(id) {
        let sql = `SELECT * FROM tb_funcionario WHERE fun_id = ?`;
        let valores = [id];
        let rows = await this.#banco.ExecutaComando(sql, valores);
        let lista = [];
        if (rows.length > 0) {
            let row = rows[0]
            lista.push(new FuncionarioEntity(
                row['fun_id'],
                row['fun_cpf'],
                row['fun_nome'],
                row['fun_salario'],
                row['fun_datadmissao'],
                row['fun_datademissao'],
                row['car_id']
            ))
            return lista;
        }
        return null;
    }

    async AumentarSalario(aumento) {
        let sql = `UPDATE tb_funcionario SET fun_salario = fun_salario * ? WHERE fun_datademissao IS NULL`
        let valores = [aumento];
        let resultado = await this.#banco.ExecutaComandoNonQuery(sql, valores);
        return resultado;
    }

    async ListarSemDemissao() {
        let sql = `SELECT * FROM tb_funcionario WHERE fun_datademissao IS NULL`;
        let row = await this.#banco.ExecutaComando(sql);
        let lista = [];
        if (row.length > 0) {
            for (let i = 0; i < row.length; i++) {
                let rows = row[i];
                lista.push(new FuncionarioEntity(
                    rows['fun_id'],
                    rows['fun_cpf'],
                    rows['fun_nome'],
                    rows['fun_salario'],
                    rows['fun_datadmissao'],
                    rows['fun_datademissao'],
                    rows['car_id']
                ))
            }
            return lista;
        }
        return null;
    }

}