import express from 'express';
import FuncionarioController from '../controllers/FuncionarioController.js';
import AuthMiddleware from '../middlewares/authMiddleware.js';
const router = express.Router();

let ctrl = new FuncionarioController();
let auth = new AuthMiddleware();

router.post('/salario', auth.validar, (req,res) => {
    // #swagger.tags = ['Funcionario']
    // #swagger.summary = "Aumentar o salário detodos os funcionarios"
    /* #swagger.security = [{
        "bearerAuth": []
    }] */
    ctrl.AumentarSalario(req,res);
})


export default router;