// get /users
// get /users/:uuid
// post /users
// put /users/:uuid
// delete /users/:uuid

import { StatusCodes } from "http-status-codes";
import { NextFunction, Router, Request, Response } from "express";
import { json } from "stream/consumers";

const usersRoute = Router();

usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: "Maria" }];
  res.status(StatusCodes.OK).send({ users }); // Para enviar o status para a página instalar um pacote para "padronizar" npm install --save http-status-codes
});

usersRoute.get(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    //bancoDados.getUserByUUid(uuid);
    res.status(StatusCodes.OK).send({ uuid });
  }
);

usersRoute.post("/users", (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  console.log(req.body);
  res.status(StatusCodes.CREATED).send(newUser);
});

usersRoute.put(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;
    modifiedUser.uuid = uuid;
    res.status(StatusCodes.OK).send({ uuid });
  }
);

usersRoute.delete(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
  }
);

export default usersRoute;
