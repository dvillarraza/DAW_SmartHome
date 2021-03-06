interface DeviceInt {
    id:number;
    name:string;
    description:string;
    type:string;
    state:string;
} 

class Main implements EventListenerObject, GETResponseListener, POSTResponseListener{

    myf:MyFramework
    contador:number = 0;
    vista:ViewMainPage;

    main():void{

        this.myf = new MyFramework();
        this.vista = new ViewMainPage(this.myf);

        console.log("Primera prueba con Typescript  ¡que friooooo!");

        let usuarios:Array<User>;

        usuarios = new Array<User>(); //Creo el objeto que es el array

        usuarios.push(new User(1,"diego","e@hola.com.ar"));
        usuarios.push(new User(2,"diego1","e1@hola.com"));
        usuarios.push(new User(3,"diego2","e2@hola.com"));

        //Mostar usuarios en el DOM
        //this.vista.mostrarUsers(usuarios);

        //this.myf.requestGET("Devices.txt",this);
        this.myf.requestGET("./dispositivos",this);

    }

    //Ejercicio 4-2

    handleEvent(evt: Event): void {
        console.log("se hizo click!");

        let sw:HTMLElement = this.myf.getElementByEvent(evt); //me devuelve el boton
        
        console.log(sw.id);

        //imrimo el estado del switch
        console.log(this.vista.getSwitchStateById(sw.id));

        //let id:string = sw.id;
        let id:number = Number(sw.id.substr(4)); //Obtengo el id en int
        //let state:boolean = this.vista.getSwitchStateById(sw.id); //Obtengo el estdo del switch    
        let state:number = Number(this.vista.getSwitchStateById(sw.id));


        let data:object = {"id":id, "state":state};

        console.log(data);

       //this.myf.requestPOST("Device.php", data, this) //Hace un eco devuleve lo mismo que se envia
       this.myf.requestPOST("./dispositivos", data, this) //Hace un eco devuleve lo mismo que se envia
           
    }

    handleGETResponse(status:number, response:string):void{

        console.log("vino respuesta de log");
        //console.log(status);
        //console.log(response);

        let data: DeviceInt[] = JSON.parse(response);

        //Se deberia hacer un control de los objetos creados en DeviceInt si el servidor los envio bien

        console.log(data);

        this.vista.showDevices(data);

        //Esto se podría haber echo en la lista
        for(let d of data)
        {
            //let sw:HTMLElement = this.myf.getElementByID("dev_"+d.id);
            //sw.addEventListener("cliçk", this);
            this.myf.configClick("dev_"+d.id,this); //En cada click se ejecuta el metodo handleEvent
        }

    }

    handlePOSTResponse(status: number, response: string): void {
        console.log(status);
        console.log(response);
    }


}

window.onload = function () {

    //punto de entrada
    let m:Main = new Main();

    m.main();

}

