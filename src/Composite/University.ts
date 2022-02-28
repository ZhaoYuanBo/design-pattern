import { Organization } from "./Organization";


export class University extends Organization{
   
     
    /**子节点放入orgList中 */
    private orgList= new Map<string,Organization>();

    constructor(name:string,desc:string){ 
        super(name,desc);
    }
    

    add(name:string,org:Organization):void{ 
        this.orgList.set(name,org);
    }

    remove(name:string){ 
        this.orgList.delete(name);
    }

    print(): void {
        console.log(`--${this.getName()} —— ${this.getDesc()}--`);

        this.orgList.forEach((v,k,m)=>{ 
          v.print();
        })
    } 
}