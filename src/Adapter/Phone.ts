import { VoltageAdapter } from "./VoltageAdapter";

export class Phone {
    charging(VoltageAdapter:VoltageAdapter):void{ 
        if(VoltageAdapter.output5v()==5){ 
            console.log('是5v，能充电');
        }else{ 
           console.log('不是5v，不能充电');
        }
    }
}