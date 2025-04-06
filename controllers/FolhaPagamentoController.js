import Database from "../db/database.js";
import FolhaPagamentoEntity from "../entities/FolhaPagamentoEntity.js";
import ItensFolhaPagamentoEntity from "../entities/ItensFolhaPagamentoEntity.js";
import FolhaPagamentoRepository from "../repositories/FolhaPagamentoRepository.js"
import FuncionarioRepository from "../repositories/FuncionarioRepository.js";

export default class FolhaPagamentoController {

    #repoFolha
    #repoFuncionario
    constructor() {
        this.#repoFolha = new FolhaPagamentoRepository();
        this.#repoFuncionario = new FuncionarioRepository();
    }

    async GerarFolhaPagamento(req, res) {

        let banco = new Database();

        try {

            await banco.AbreTransacao();
            this.#repoFolha.banco = banco;
            this.#repoFuncionario.banco = banco;

            let data = new Date();
            let mes = data.getMonth();
            let ano = data.getFullYear();

            let entidade = new FolhaPagamentoEntity(0, ano, mes, null);
            let idFolha = await this.#repoFolha.GerarFolhaPagamento(entidade);
            if (idFolha) {
                let total = null;

                let funcionario = await this.#repoFuncionario.ListarSemDemissao();

                for (let i = 0; i < funcionario.length; i++) {

                    let entidadeItens = new ItensFolhaPagamentoEntity();
                    entidadeItens.id = funcionario[i].id;
                    entidadeItens.salario = funcionario[i].salario;
                    entidadeItens.fun_id = funcionario[i].id;
                    entidadeItens.fol_id = idFolha;

                    total += parseFloat(funcionario[i].salario);

                    await this.#repoFolha.ItensFolhaPagamento(entidadeItens)

                }
                await this.#repoFolha.AtualizarSalarioTotal(total, idFolha);
                await banco.Commit();
                return res.status(200).json("Folha de pagamento criada com sucesso!");

            } else
                throw new Error("Erro ao gerar a folha de pagamento no banco de dados!")
        } catch (ex) {
            await banco.Rollback();
            return res.status(500).json({msg: "Erro interno no servidor"})
        }

    }

}