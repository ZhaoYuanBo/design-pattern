"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sheep = void 0;
var Sheep = /** @class */ (function () {
    function Sheep(age, hair, glass) {
        this.age = age;
        this.hair = hair;
        this.glass = glass;
    }
    Sheep.prototype.canCopy = function () {
        console.log('can copy');
    };
    Sheep.prototype.canNotCopy = function () {
        console.log('can not copy');
    };
    /**
     * 浅拷贝：基本数据类型成员变量，浅拷贝会直接进行传递。引用数据类型的成员变量，会进行引用传递
     * @returns
     */
    Sheep.prototype.shallowCopy = function () {
        return new Sheep(this.age, this.hair, this.glass);
    };
    /**
     * 深拷贝:模拟Java中的输入输出流来实现序列化，和反序列化
     * this关键字会获取到类中所有的属性（包括子类的级联属性）
     * stringify 和 parse 过程中会失去类中原有的 Function,需要手动在克隆对象后面加上支持拷贝的函数
     * @returns
     */
    Sheep.prototype.deepClone = function () {
        var serializeStr = JSON.stringify(this);
        var cloneObj = JSON.parse(serializeStr);
        cloneObj.canCopy = this.canCopy;
        return cloneObj;
    };
    return Sheep;
}());
exports.Sheep = Sheep;
//# sourceMappingURL=Sheep.js.map