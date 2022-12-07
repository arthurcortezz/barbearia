import { MessageToast } from "../services";
import { conta } from "../types";
import { Controller } from "./controller";

class CommentController extends Controller {
  constructor(route: string) {
    super(route);
  }
  async cadastro(objeto: conta): Promise<JSON> {
    try {
      const retorno = await this.verificaEmail(objeto.email);
      const emailValido = await this.getReturn(retorno);
      if (emailValido.length > 0) {
        MessageToast.erro("Email já cadastrado!");
        throw "Email já cadastrado!";
      } else {
        const response = await this.api.post("/cadastro", objeto);
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }

  async login(email: string, senha: string): Promise<JSON> {
    try {
      let retorno = await this.api.get("/login", { params: { email, senha } });
      return retorno.data;
    } catch (error) {
      throw error;
    }
  }

  async verificaEmail(email: string): Promise<JSON> {
    try {
      let response = await this.api.get("/verificaEmail", { params: { email } });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async buscarUsuario(id: number | null): Promise<JSON> {
    try {
      let response = await this.api.get("/buscarUsuario", { params: { id } });
      return response;
    } catch (error) {
      throw error;
    }
  }
}
export default new CommentController("conta");
