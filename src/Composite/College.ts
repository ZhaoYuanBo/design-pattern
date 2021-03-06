import { Organization } from "./Organization";

export class College extends Organization{


    private orgList= new Map<string,Organization>();

    constructor(name:string,desc:string){ 
        super(name,desc);
    }
        
    /**
     * @override
     * @param name 
     * @param org 
     */
    add(name:string,org:Organization) :void{ 
        this.orgList.set(name,org);
    }
     
    remove(name:string):void{ 
        this.orgList.delete(name);
    }

    print(): void {
        console.log(`\n-${this.getName()} —— ${this.getDesc()}-`);
        this.orgList.forEach((v,k,m)=>{ 
           v.print();
        })
    } 

    
}