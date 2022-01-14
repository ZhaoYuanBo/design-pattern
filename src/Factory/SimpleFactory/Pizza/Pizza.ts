
/**
 * 抽象 Pizza类，制作过程分为 准备-烘烤-切块-打包
 * 其中 准备 过程设为抽象方法
 */
export abstract class  Pizza {

    protected type :string;
    constructor() {
        
    }
    
    make():void{ 
        this.prepare();
        this.bake();
        this.cut();
        this.box();
    }
    protected abstract prepare():void


    private bake():void{ 
        console.log(`正在烘烤 ${this.type} 披萨 `);
    }

    private cut():void{ 
        console.log(`正在切块 ${this.type} 披萨`);
    }

    private box():void{ 
        console.log(`正在打包 ${this.type} 披萨`);
    }

    protected setType(type:string):void{ 
        this.type = type;
    }
}