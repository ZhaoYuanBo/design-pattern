"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const Facade_1 = require("./Facade");
/**
 * 外观模式通过定义一个一致的接口，用以屏蔽内部子系统的细节，使得调用端
 * 只需跟这个接口发生调用，而无需关心这个子系统的内部细节
 */
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