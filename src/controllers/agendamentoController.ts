import { MessageToast } from "../services";
import { agendamento } from "../types";
import { Controller } from "./controller";
class CommentController extends Controller {
  constructor(route: string) {
    super(route);
  }

  async criarAgendamento(object: any) {
    try {
      let response = await this.api.post("/criar", object);
      return response.data;
    } catch (error: any) {
      MessageToast.erro(error.message);
    }
  }

  async alterarAgendamento(objeto: agendamento) {
    try {
      const response = await this.api.post("/alterar", objeto);
      return response;
    } catch (error: any) {
      MessageToast.erro(error.message);
      throw error;
    }
  }

  async listarAgendamento(codigoUsuario: number | undefined) {
    try {
      if (codigoUsuario) {
        let response = await this.api.get("/listar", { params: { codigoUsuario } });
        return response.data;
      }
    } catch (error: any) {
      MessageToast.erro(error.message);
    }
  }

  async listarTodosAgendamento() {
    try {
      let response = await this.api.get("/listarTodos");
      return response.data;
    } catch (error: any) {
      MessageToast.erro(error.message);
    }
  }

  async deletarAgendamento(codigo: number) {
    try {
      const response = await this.api.delete("/deletar", { params: { codigo } });
      return response;
    } catch (error: any) {
      MessageToast.erro(error.message);
    }
  }
}
export default new CommentController("agendamento");
