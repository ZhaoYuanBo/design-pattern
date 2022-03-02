"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CommonBuilder_1 = require("./CommonBuilder");
const HightBuilder_1 = require("./HightBuilder");
const HouseBuildDirector_1 = require("./HouseBuildDirector");
/**
 * 建造者模式(Builder Pattern)又叫生成器模式，是一种对象构建模式。它
 * 可以将复杂对象的建造过程抽象出来(抽象类别),使这个抽象过程的不同实现方法
 * 可以构造出不同表现(属性)的对象。
 * 建造者模式是一步一步创建一个复杂的对象，它允许用户只通过指定复杂对象的类型
 * 和内容就可以构建它们，用户不需要知道内部的具体构建细节
 */
class Client {
    static main() {
        let house;
        const houseBuildDirector = new HouseBuildDirector_1.HouseBuildDirector();
        const commonBuilder = new CommonBuilder_1.CommonBuilder();
        const highBuilder = new HightBuilder_1.HighBuilder();
        console.log("建造普通房子");
        houseBuildDirector.setBuilder(commonBuilder);
        house = houseBuildDirector.buildHouse();
        console.log(house.getBaiseDepth(), house.getWallHeight(), house.getColor());
        console.log("\n建造摩天大楼");
        houseBuildDirector.setBuilder(highBuilder);
        house = houseBuildDirector.buildHouse();
        console.log(house.getBaiseDepth(), house.getWallHeight(), house.getColor());
    }
}
//# sourceMappingURL=Client.js.map