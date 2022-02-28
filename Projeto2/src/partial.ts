interface ClienteZ {
  id: number;
  title: string;
  description: string;
}

const cli1: ClienteZ = {
  id: 1,
  title: "Eduardo Motton",
  description: "Eduardo Fratoni Motton",
};

function modificar(cliente: ClienteZ, clienteUpdate: Partial<ClienteZ>) {
  return { ...cliente, ...clienteUpdate };
}

const novo = modificar(cli1, {
  title: "Eduardo F Motton",
});

console.log(novo);
