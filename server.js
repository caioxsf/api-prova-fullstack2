import express from 'express'

import swaggerUi from 'swagger-ui-express'
import cookieParser from 'cookie-parser'
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const outputJson = require("./swagger-output.json");

import FuncionarioRoute from './routes/FuncionarioRoute.js'
import AumentarSalarioRoute from './routes/AumentarSalarioRoute.js'
import AuthRoute from './routes/AuthRoute.js'
import FolhaPagamentoRoute from './routes/FolhaPagamentoRoute.js'

const app = express();
app.use(express.json())
app.use(cookieParser());

app.use('/', FuncionarioRoute);
app.use('/', AumentarSalarioRoute)
app.use('/', AuthRoute)
app.use('/', FolhaPagamentoRoute)
app.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson))

app.listen(5000, function() {
    console.log("servidor web em funcionamento!");
});