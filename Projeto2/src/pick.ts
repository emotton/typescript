interface ClienteZX {
  id: number;
  title: string;
  description: string;
}

type ClienteZXPreview = Pick<ClienteZX, "title" | "description">;

const cli2: ClienteZXPreview = {
  title: "Eduardo",
  description: "EFM",
};

console.log(cli2);
