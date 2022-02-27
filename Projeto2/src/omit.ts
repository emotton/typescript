interface ClienteX {
  id: string;
  title: string;
  description: string;
}

function mostrar(data: Omit<ClienteX, "id">) {
  console.log(data);
}

/*
const cliente: ClienteX = {
  id: "123",
  title: "Testando",
  description: "Testando 123",
}
*/

mostrar({
  title: "Testando",
  description: "Testando 123",
});
