import jwt from 'jsonwebtoken';
import UsuarioRepository from '../repositories/UsuarioRepository.js';
const SEGREDO = "asldjlaksdjk";

export default class AuthMiddleware {

    gerarToken(id, nome, email) {
        return jwt.sign({
            id: id,
            nome: nome,
            email: email,
        }, SEGREDO, { expiresIn: 18000 });
    }

    async validar(req, res, next) {
        if (req.headers.authorization == null)
            return res.status(401).json({ msg: "Token de acesso não foi enviado!" })

        let token = req.headers["authorization"].split(" ")[1];
        if (token) {
            let usuarioToken = jwt.verify(token, SEGREDO);
            let repoUsuario = new UsuarioRepository();
            let usuarioBanco = await repoUsuario.Obter(usuarioToken.id);
            if (usuarioBanco.length > 0) {
                if (usuarioBanco[0].ativo == 1) {
                    req.usuarioLogado = usuarioBanco[0];
                    next();
                } else {
                    res.status(401).json({ msg: "Usuario não autorizado" })
                }
            } else {
                res.status(401).json({ msg: "Usuario não inexistente!" })
            }
        } else
            res.status(401).json({ msg: "Usuario não inexistente!" })

    }

}