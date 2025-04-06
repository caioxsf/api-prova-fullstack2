import express from 'express';
import FuncionarioController from '../controllers/FuncionarioController.js';
import AuthMiddleware from '../middlewares/authMiddleware.js';
const router = express.Router();

let ctrl = new FuncionarioController();
let auth = new AuthMiddleware();
router.post('/funcionario', auth.validar,(req,res) => {
    // #swagger.tags = ['Funcionario']
    // #swagger.summary = "Cadastrar um funcionario"
     /* #swagger.security = [{
        "bearerAuth": []
    }] */
    ctrl.CadastrarFuncionario(req,res);
})

router.put('/funcionario/:id', auth.validar,(req,res) => {
    // #swagger.tags = ['Funcionario']
    // #swagger.summary = "Demitir funcionario"
     /* #swagger.security = [{
        "bearerAuth": []
    }] */
    ctrl.DemitirFuncionario(req,res);
})

export default router;