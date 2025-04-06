import swaggerAutogen from "swagger-autogen";
const doc = {
    info: {
        title: "Sistema de Gerenciamento de RH - API",
        description: "API do sistema de gerenciment do departamento de Recursos Humanos"
    },
    host: 'localhost:5000',
    components: {
        securitySchemes:{
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        }
    }
}

const outputJson = "./swagger-output.json";
const routes = ['./routes/AuthRoute.js','./routes/FuncionarioRoute.js', './routes/AumentarSalarioRoute.js', './routes/FolhaPagamentoRoute.js']

swaggerAutogen({openapi: '3.0.0', autoHeaders: false})(outputJson, routes, doc)
.then( async () => {
    await import('./server.js');
})