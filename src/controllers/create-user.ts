import { Request, Response } from "express";
import { APIResponse, User } from "../models";
import { CreateUserService } from "../services/create-user";

class CreateUser {
  private service = CreateUserService;

  public handle(req: Request, res: Response) {
    try {
      const response = new this.service().execute(req.body);

      res.status(201).json(response);
    } catch (err: any) {
      const [statusCode, messages] = err.messages.split(": ");
      if (Number(statusCode)) {
        res.status(statusCode).json({
          data: [],
          messages: messages.split("|"),
        } as APIResponse);
      } else {
        res.status(500).json({
          data: [],
          messages: ["unespected error while creating user"],
        } as APIResponse);
      }
    }
  }
}

export { CreateUser };
