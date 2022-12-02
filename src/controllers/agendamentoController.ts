import { Controller } from "./controller";
import { AxiosResponse } from "axios";
class CommentController extends Controller {
  constructor(route: string) {
    super(route);
  }

  async criarAgendamento(object: any) {
    console.log(
      "🚀 ~ file: agendamentoController.ts:9 ~ CommentController ~ criarAgendamento ~ object",
      object
    );
    try {
      let response = await this.api.post("/criar", object);
      return response.data;
    } catch (error: any) {
      throw error.message;
    }
  }

  async listarAgendamento(): Promise<JSON> {
    try {
      let response = await this.api.get("/listar");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
export default new CommentController("agendamento");
