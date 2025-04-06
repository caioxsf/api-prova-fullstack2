import AumentoSalarioEntity from "../entities/AumentoSalarioEntity.js";
import FuncionarioEntity from "../entities/FuncionarioEntity.js";
import AumentoSalarioRepository from "../repositories/AumentoSalarioRepository.js";
import FuncionarioRepository from "../repositories/FuncionarioRepository.js"

export default class FuncionarioController {

    #repoFuncionario
    #repoAumentoSalario
    constructor() {
        this.#repoFuncionario = new FuncionarioRepository();
        this.#repoAumentoSalario = new AumentoSalarioRepository();
    }

    async CadastrarFuncionario(req, res) {

        let { nome, cpf, salario, car_id } = req.body;

        let data_admissao = new Date();

        if (cpf && nome && salario && car_id) {
            let entidade = new FuncionarioEntity(0, cpf, nome, salario, data_admissao, null, car_id);
            if (await this.#repoFuncionario.CadastrarFuncionario(entidade))
                res.status(201).json({ msg: "Funcionario cadastrado com sucesso!" })
            else
                throw new Error("Erro ao inserir funcionario no banco de dados!")
        } else
            res.status(400).json({ msg: "Parâmetros invalidos!" })

    }

    async DemitirFuncionario(req, res) {
        let { id } = req.params;
        let data_demissao = new Date();
        let funcionario = await this.#repoFuncionario.Obter(id);
        if (funcionario != null) {
            if (await this.#repoFuncionario.DemitirFuncionario(data_demissao, id))
                res.status(200).json({ msg: "Funcionario demitido com sucesso!" })
            throw new Error("Erro ao demitir funcionario no banco de dados")
        } else
            res.status(404).json({ msg: "Funcionario nao encontrado!" })

    }

    async AumentarSalario(req, res) {

        let { percentual } = req.body;
        let data = new Date();
        const id = req.usuarioLogado.id

        if(percentual) {
            let entidade = new AumentoSalarioEntity(0,data,percentual,id);
            if(await this.#repoAumentoSalario.GerarAumentoSalario(entidade)) {
                let percentualNovo = 1 + (percentual / 100);
                if(await this.#repoFuncionario.AumentarSalario(percentualNovo))
                    return res.status(200).json({msg: "Salario de todos os funcionarios aumentados!"})
                else
                    return res.status(200).json({msg: "Só existem funcionario demitidos!"})
            } else
                throw new Error ("Erro ao gerar aumento de salario pelo funcionario")
        }
       
    }

}