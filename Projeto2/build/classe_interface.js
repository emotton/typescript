"use strict";
class Cliente {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(this.name);
    }
}
class PersonRepository {
    findById(id) {
        console.log("findById");
        return new Cliente('Eduardo');
    }
    save(entity) {
        console.log("save");
        return new Cliente('Eduardo');
    }
}
class PersonRepository2 {
    findById(id) {
        console.log("findById");
        return new Cliente('Eduardo');
    }
    save(entity) {
        console.log("save");
        return new Cliente('Eduardo');
    }
}
