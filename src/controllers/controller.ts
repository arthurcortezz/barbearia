import axios from "axios";

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

  async getReturn(response: any) {
    const objeto = JSON.stringify(response);
    const contact = JSON.parse(objeto);
    if (contact) {
      return contact.content;
    } else throw new Error("Message was not received.");
  }
}
