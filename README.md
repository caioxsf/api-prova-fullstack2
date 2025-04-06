
# Sistema de Gerenciamento de Funcionários e Folha de Pagamento

Este projeto é um sistema de gerenciamento de funcionários e folha de pagamento, desenvolvido para facilitar o cadastro, demissão, aumento de salário e geração de folha de pagamento de uma empresa.

## O Sistema permite:

- Cadastrar funcionários: Adicionar novos funcionários ao sistema.
- Demitir funcionários: Registrar a data de demissão de um funcionário.
- Aumentar salário: Aplicar um aumento percentual a todos os funcionários ativos (não demitidos) e registrar o aumento na tabela de histórico.
- Gerar folha de pagamento: Criar uma folha de pagamento mensal com os salários dos funcionários ativos e calcular o valor total.

# Funcionalidades 
## 1. Cadastro de Funcionário
- Insere um novo funcionário na tabela tb_funcionario.
- Campos obrigatórios: `fun_cpf`, `fun_nome`, `fun_salario`, `fun_dataadmissao`, `car_id`.
- O campo `fun_datademissao` é inicialmente NULL (funcionário ativo).

## 2. Demissão de Funcionário
- Atualiza o campo `fun_datademissao` do funcionário na tabela `tb_funcionario` com a data atual (ou a data especificada).
- O funcionário passa a ser considerado inativo para aumentos salariais e geração de folha de pagamento.

## 3. Aumento de Salário
- Aplica um aumento percentual a todos os funcionários ativos (`fun_datademissao` IS NULL).
- Atualiza o campo `fun_salario` na tabela `tb_funcionario`.
- Registra o aumento na tabela `tb_aumentosalario`, incluindo: 
    - `aus_data`: Data do aumento.
    - `aus_percentual`: Percentual aplicado. 
    - `usu_id`: ID do usuário logado que solicitou o aumento.

## 4. Geração de Folha de Pagamento
- Cria uma nova folha de pagamento na tabela `tb_folhapagamento` com o ano e mês especificados, e `fol_valortotal` inicialmente NULL.
- Gera os itens da folha de pagamento na tabela `tb_itensfolhapagamento` para cada funcionário ativo, incluindo:
    - `ifp_salario`: Salário atual do funcionário.
    - `fun_id`: ID do funcionário.
    - `fol_id`: ID da folha de pagamento recém-criada.
- Calcula o valor total da folha de pagamento e atualiza o campo `fol_valortotal`.

![Uploading Sem Título.png…](https://github.com/caioxsf/api-prova-fullstack2/blob/main/Sem%20t%C3%ADtulo.png)
