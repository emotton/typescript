class Player {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get age() {
    return this._age;
  }

  set age(age: number) {
    if (age > 60) throw new Error("Idade excessiva");
    this._age = age;
  }
}

try {
  const p1 = new Player("Eduardo", 52);
  console.log(p1.name);

  p1.name = "Eduardo F Motton";
  p1.age = 65;

  console.log(p1);
} catch (e) {
  console.log("Ocorreu algum erro: ", (e as Error).message);
}
