export default function GetReturnJson(objeto: any) {
  if (objeto) {
    const obj = JSON.stringify(objeto);
    const contact = JSON.parse(obj);
    return contact;
  }
}
