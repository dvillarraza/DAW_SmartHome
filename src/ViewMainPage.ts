//Esta clase se encarga de mostrar las cosas en el DOM
//Toda la construccion de HTML se hace aca
class ViewMainPage{
    private myf:MyFramework;

    constructor(myf:MyFramework){
        this.myf = myf;
    }



    showDevices(list: DeviceInt[]):void{
        //1 - obtener la referencia del ul
        //2 - iterar la lista de dispositivos
        //3 - insertar un li por cada dispositivo

        let ul:HTMLElement = this.myf.getElementByID("devicesList");
        

        let li:string="";

        for(let d of list){ //Iteramos la lista de dispositivos
            let icon:string = "lightbulb.png"
            if(d.type == "1")
                icon="window.png";

            let chk:string="";
            if(d.state == "1")
                chk = "checked";


            li+=`<li class="collection-item avatar">
                    <img src="images/${icon}" alt="" class="circle">
                    <span class="title">${d.name}</span>
                    <p>${d.description}</p>
                    <a href="#!" class="secondary-content">
                        <!-- Switch -->
                        <div class="switch">
                        <label>
                            Off
                            <input type="checkbox" ${chk} id="dev_${d.id}">
                            <span class="lever"></span>
                            On
                        </label>
                        </div>
                    </a>
                </li>`;
        }
        console.log(ul);

        ul.innerHTML = li;
    }

    mostrarUsers(usuarios:Array<User>):void{
        let ul:HTMLElement = this.myf.getElementByID("usuarios");
        let lis:string ="";

        for(let u of usuarios){
            //u.printinfo();
            lis+=`<li>${u.name} ${u.email}</li>`;
        }

        ul.innerHTML = lis;
    }

    //Devuelve el estado del On o Off del switch pasado por id
    getSwitchStateById(id:string):boolean{
        let sw:HTMLElement = this.myf.getElementByID(id);

        let input:HTMLInputElement = <HTMLInputElement> sw; //Hago un cast para poder leer la propiedad cheked

        return input.checked;

    }

}  