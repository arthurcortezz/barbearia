export interface linksUrls {
  url: string;
  text: string;
  image?: boolean;
}
export interface conta {
  codigo?: number;
  nome: string;
  celular: string;
  email: string;
  senha: string;
  permissao?: string;
}

export interface agendamento {
  data: string;
  horario: string;
  local: string;
  codigo?: number;
}
