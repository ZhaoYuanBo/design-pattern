"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Glass_1 = require("./ProtoType/Glass");
var Sheep_1 = require("./ProtoType/Sheep");
//简单工厂调试
{
    // let HZpz =new Order('HZ');
    // let SHpz = new Order('SH');
}
//原型模式调试
{
    //浅拷贝
    // const glass = new Glass('灰色', 20);
    // const sheep = new Sheep(1, '', glass);
    // console.log(`origin :" ${JSON.stringify(sheep)}`);
    // const sheep_1 = sheep.shallowCopy();
    // const sheep_2 = sheep.shallowCopy();
    // const sheep_3 = sheep.shallowCopy();
    // sheep.age =5;
    // sheep.glass.color ='蓝色';
    // console.log(`origin: ${JSON.stringify(sheep)}`);
    // console.log(`sheep_1 : ${JSON.stringify(sheep_1)}`);
    // console.log(`sheep_2: ${JSON.stringify(sheep_2)}\n`);
    // const sheep2_2 = sheep_2;
    // console.log(`sheep == sheep_3: ${sheep == sheep_3}`);
    // console.log(`sheep2_2 == sheep_2: ${sheep2_2 == sheep_2}`);
    //深拷贝
    var glass = new Glass_1.Glass('灰色', 20);
    var sheep = new Sheep_1.Sheep(3, undefined, glass);
    console.log("origin : ".concat(JSON.stringify(sheep)));
    var sheep_1 = sheep.deepClone();
    var sheep_2 = sheep.deepClone();
    var sheep_3 = sheep.deepClone();
    console.log("sheep_1 : ".concat(JSON.stringify(sheep_1), "\n"));
    sheep.age = 5;
    sheep.glass.color = '白色';
    console.log("origin: ".concat(JSON.stringify(sheep)));
    console.log("sheep_2: ".concat(JSON.stringify(sheep_2), "\n"));
    sheep_2.canCopy();
    console.log("".concat(sheep_2.canNotCopy, "\n")); // undefined
    var sheep2_2 = sheep_2;
    console.log("sheep == sheep_3: ".concat(sheep == sheep_3));
    console.log("sheep2_2 == sheep_2: ".concat(sheep2_2 == sheep_2));

// 111111111111
}
//# sourceMappingURL=main.js.map
