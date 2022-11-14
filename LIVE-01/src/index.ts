import express, { Request, Response, NextFunction } from "express";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/usersRoutes";

const app = express();

// configurações da aplicação
app.use(express.json);
app.use(express.urlencoded({ extended: true }));

// configurações das rotas
app.use(usersRoute);
app.use(statusRoute);

app.listen(3000, () => {
  console.log("Aplicação executando na porta 3000!");
});

//npm run dev
