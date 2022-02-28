
import { Phone } from "./Adapter/Phone";
import { VoltageAdapter } from "./Adapter/VoltageAdapter";
import { Order } from "./Factory/Order/Order";
import { Glass } from "./ProtoType/Glass";
import { Sheep } from "./ProtoType/Sheep";
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
    // const glass = new Glass('灰色', 20);
    // const sheep = new Sheep(3, undefined, glass);
    // console.log(`origin : ${JSON.stringify(sheep)}`);

    // const sheep_1 = sheep.deepClone();
    // const sheep_2 = sheep.deepClone();
    // const sheep_3 = sheep.deepClone();
    // console.log(`sheep_1 : ${JSON.stringify(sheep_1)}\n`);

    // sheep.age = 5;
    // sheep.glass.color = '白色';
    // console.log(`origin: ${JSON.stringify(sheep)}`);
    // console.log(`sheep_2: ${JSON.stringify(sheep_2)}\n`);
    // sheep_2.canCopy();
    // console.log(`${sheep_2.canNotCopy}\n`);     // undefined

    // const sheep2_2 = sheep_2;
    // console.log(`sheep == sheep_3: ${sheep == sheep_3}`);
    // console.log(`sheep2_2 == sheep_2: ${sheep2_2 == sheep_2}`);
}

{ 
    // const phone = new Phone();
    // const va = new VoltageAdapter();
    // phone.charging(va);
}

{ 
}