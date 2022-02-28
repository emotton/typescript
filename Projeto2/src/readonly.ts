interface ClienteZY {
  id: number;
  title: string;
  description: string;
}

const cliY1: Readonly<ClienteZY> = {
  id: 1,
  title: "Eduardo",
  description: "Eduardo F Motton",
};

// cliY1.title = "Eduardo F Motton";

console.log(cliY1);
