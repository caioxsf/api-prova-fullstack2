import express from 'express';
import FolhaPagamentoController from '../controllers/FolhaPagamentoController.js';
import AuthMiddleware from '../middlewares/authMiddleware.js';
const router = express.Router();

let ctrl = new FolhaPagamentoController();
let auth = new AuthMiddleware();

router.get('/folha-pagamento', auth.validar, (req,res) => {
    // #swagger.tags = ['Folha de pagamento']
    // #swagger.summary = "Gerar a folha de pagamento de todos os funcionarios que não estão demitidos"
     /* #swagger.security = [{
        "bearerAuth": []
    }] */
    ctrl.GerarFolhaPagamento(req,res);
})

export default router;