"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HighBuilder = void 0;
const Builder_1 = require("./Builder");
class HighBuilder extends Builder_1.Builder {
    buildBaise() {
        const depth = 50;
        console.log(`摩天高楼地基深度为 ${depth} 米`);
        return depth;
    }
    buildWall() {
        const height = 500;
        console.log(`摩天大楼墙体高度为 ${height} 米`);
        return height;
    }
    printColor() {
        const color = '银色';
        console.log(`摩天大楼的墙体颜色为 ${color}`);
        return color;
    }
}
exports.HighBuilder = HighBuilder;
//# sourceMappingURL=HightBuilder.js.map