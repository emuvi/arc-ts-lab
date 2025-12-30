export class Father {
    constructor(options) {
        this._options = options;
    }
    printName() {
        console.log(this._options.name);
    }
}
export class Child extends Father {
    constructor() {
        super(test());
    }
}
function test() {
    return {
        name: "Ords",
    };
}
new Child().printName();
//# sourceMappingURL=main.js.map