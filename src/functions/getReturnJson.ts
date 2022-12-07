export default function GetReturnJson(objeto: any) {
  console.log("🚀 ~ file: getReturnJson.ts:2 ~ GetReturnJson ~ objeto", objeto);
  if (objeto) {
    const obj = JSON.stringify(objeto);
    const contact = JSON.parse(obj);
    return contact;
  }
}
