import axios, { AxiosResponse } from "axios";

export class Controller {
  api: any;
  chavesCipher: any;
  service: any;
  constructor(route: string) {
    this.api = axios.create({
      baseURL: `${process.env.NEXT_STATIC_URL_API}/${route}`,
    });
  }

  async getRequestBody(body: any) {
    return { message: body };
  }

  async getReturn(response: AxiosResponse) {
    const data = response.data;
    if (data.message) {
      return data.message;
    } else throw new Error("Message was not received.");
  }
}
