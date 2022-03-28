"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const Facade_1 = require("./Facade");
class Client {
    static main() {
        const facade = new Facade_1.Facade();
        facade.on();
        facade.working();
        facade.off();
    }
}
exports.Client = Client;
Client.main();
//# sourceMappingURL=Client.js.map