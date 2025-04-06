import Database from "../db/database.js"
import UsuarioEntity from "../entities/UsuarioEntity.js";

export default class UsuarioRepository {

    #banco
    constructor() {
        this.#banco = new Database();
    }

    async Obter (id) {
        let sql = `SELECT * FROM tb_usuariorh WHERE usu_id = ?`;
        let valores = [id];
        let row = await this.#banco.ExecutaComando(sql,valores);
        let lista = [];
        if(row.length > 0) {
            lista.push(new UsuarioEntity(
                row[0]['usu_id'],
                row[0]['usu_nome'],
                row[0]['usu_email'],
                row[0]['usu_ativo'],
                row[0]['usu_senha'],
            ))
            return lista;
        }
        return null;
    }

    async ValidarAcesso (email, senha) {
        let sql = `SELECT * FROM tb_usuariorh WHERE usu_email = ? AND usu_senha = ?`;
        let valores = [email,senha];
        let row = await this.#banco.ExecutaComando(sql,valores);
        let lista = [];
        if(row.length > 0) {
            lista.push(new UsuarioEntity(
                row[0]['usu_id'],
                row[0]['usu_nome'],
                row[0]['usu_email'],
                row[0]['usu_ativo'],
                row[0]['usu_senha'],
            ))
            return lista;
        }
        return null;
    }

}