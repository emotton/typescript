class Cliente{
    private name:string;
    constructor(name: string){
        this.name = name;
    }
    print():void{
        console.log(this.name);
    }
}

interface Repository<T, ID>{
    findById(id: ID): T;
    save(entity: T): T;
}

class PersonRepository implements Repository<Cliente, number>{
    findById(id: number): Cliente {
        console.log("findById");
        return new Cliente('Eduardo');
    }
    save(entity: Cliente): Cliente {
       console.log("save");
       return new Cliente('Eduardo');
    }

}

interface NumberId {
    id: number;
}

interface Repository2<T, ID extends NumberId>{
    findById(id: ID): T;
    save(entity: T): T;
}

class PersonRepository2 implements Repository2<Cliente, NumberId>{
    findById(id: NumberId): Cliente {
        console.log("findById");
        return new Cliente('Eduardo');
    }
    save(entity: Cliente): Cliente {
       console.log("save");
       return new Cliente('Eduardo');
    }

}