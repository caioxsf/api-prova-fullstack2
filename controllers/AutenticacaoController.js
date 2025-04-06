import AuthMiddleware from "../middlewares/authMiddleware.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";

export default class AutenticacaoController {

    async Token (req,res) {
        let {email, senha} = req.body;

        if(email, senha) {
            let repoUsuario = new UsuarioRepository();
            let usuario = await repoUsuario.ValidarAcesso(email,senha);
            if(usuario) {
                let auth = new AuthMiddleware();
                let token =  auth.gerarToken(usuario[0].id, usuario[0].nome, usuario[0].email)
                return res.status(200).json({token: token});
            } else 
                return res.status(400).json({msg: "Email/Senha invalidos!"})
        } else
            return res.status(400).json({msg: "Parâmetros RA/Senha incorretos!"});
    }
}