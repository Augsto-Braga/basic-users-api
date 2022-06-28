import { APIResponse, User } from "../models";
import { v4 } from "uuid";

class CreateUserService {
  private errors: string = "";
  private emailRegex =
    /^(\S+)@((?:(?:(?!-)[a-zA-Z0-9-]{1,62}[a-zA-Z0-9])\.)+[a-zA-Z0-9]{2,12})$/;

  public execute(user: User): APIResponse {
    if (!user.name) {
      this.errors = this.errors += "name:field required|";
    }

    if (user.name.length < 3) {
      this.errors = this.errors += "name:mame too short|";
    }

    if (this.emailRegex.test(user.email)) {
      this.errors = this.errors += "email:invalid email|";
    }

    if (!new Date(user.birthdate).getTime()) {
      this.errors = this.errors += "birthdate:invalid date|";
    }

    if (this.errors.length != 0) {
      throw new Error(`400: ${this.errors}`);
    }

    user.id = v4();

    return {
      data: user,
      messages: [],
    } as APIResponse;
  }
}

export { CreateUserService };
