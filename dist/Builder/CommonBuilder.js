"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonBuilder = void 0;
const Builder_1 = require("./Builder");
class CommonBuilder extends Builder_1.Builder {
    buildBaise() {
        const depth = 5;
        console.log(`普通房屋地基深度为 ${depth} 米`);
        return depth;
    }
    buildWall() {
        const height = 5;
        console.log(`普通房屋墙体高度为 ${height} 米`);
        return height;
    }
    printColor() {
        const color = '白色';
        console.log(`普通房屋前面颜色为 ${color}`);
        return color;
    }
}
exports.CommonBuilder = CommonBuilder;
//# sourceMappingURL=CommonBuilder.js.map