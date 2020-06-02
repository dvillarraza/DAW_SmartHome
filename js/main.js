class Main {
    constructor() {
        this.contador = 0;
    }
    main() {
        this.myf = new MyFramework();
        this.vista = new ViewMainPage(this.myf);
        console.log("Primera prueba con Typescript  ¡que friooooo!");
        let usuarios;
        usuarios = new Array(); //Creo el objeto que es el array
        usuarios.push(new User(1, "diego", "e@hola.com.ar"));
        usuarios.push(new User(2, "diego1", "e1@hola.com"));
        usuarios.push(new User(3, "diego2", "e2@hola.com"));
        //Mostar usuarios en el DOM
        this.vista.mostrarUsers(usuarios);
        this.myf.requestGET("Devices.txt", this);
    }
    //Ejercicio 4-2
    handleEvent(evt) {
        console.log("se hizo click!");
        let sw = this.myf.getElementByEvent(evt); //me devuelve el boton
        console.log(sw.id);
        //imrimo el estado del switch
        console.log(this.vista.getSwitchStateById(sw.id));
        let id = sw.id;
        let state = this.vista.getSwitchStateById(sw.id); //Obtengo el estdo del switch
        let data = { "id": id, "state": state };
        this.myf.requestPOST("Device.php", data, this); //Hace un eco devuleve lo mismo que se envia
    }
    handleGETResponse(status, response) {
        console.log("vino respuesta de log");
        //console.log(status);
        //console.log(response);
        let data = JSON.parse(response);
        //Se deberia hacer un control de los objetos creados en DeviceInt si el servidor los envio bien
        console.log(data);
        this.vista.showDevices(data);
        //Esto se podría haber echo en la lista
        for (let d of data) {
            //let sw:HTMLElement = this.myf.getElementByID("dev_"+d.id);
            //sw.addEventListener("cliçk", this);
            this.myf.configClick("dev_" + d.id, this); //En cada click se ejecuta el metodo handleEvent
        }
    }
    handlePOSTResponse(status, response) {
        console.log(status);
        console.log(response);
    }
}
window.onload = function () {
    //punto de entrada
    let m = new Main();
    m.main();
};
