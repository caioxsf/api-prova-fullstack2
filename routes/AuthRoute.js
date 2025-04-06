import express from 'express';
import AutenticacaoController from '../controllers/AutenticacaoController.js';
const router = express.Router();

let auth = new AutenticacaoController();

router.post('/auth/token', (req,res) => {
    // #swagger.tags = ['Auth']
    // #swagger.summary = "Gerar um token JWT"
    auth.Token(req,res);
})


export default router;