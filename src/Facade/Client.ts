import { Facade } from "./Facade";


export class Client{ 
    static main():void{ 
        const facade = new Facade();
        facade.on();
        facade.working();
        facade.off();
    }
}

Client.main();