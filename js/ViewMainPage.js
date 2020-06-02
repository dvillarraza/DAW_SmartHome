//Esta clase se encarga de mostrar las cosas en el DOM
//Toda la construccion de HTML se hace aca
class ViewMainPage {
    constructor(myf) {
        this.myf = myf;
    }
    showDevices(list) {
        //1 - obtener la referencia del ul
        //2 - iterar la lista de dispositivos
        //3 - insertar un li por cada dispositivo
        let ul = this.myf.getElementByID("devicesList");
        let li = "";
        for (let d of list) { //Iteramos la lista de dispositivos
            let icon = "lightbulb.png";
            if (d.type == "1")
                icon = "window.png";
            let chk = "";
            if (d.state == "1")
                chk = "checked";
            li += `<li class="collection-item avatar">
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
    mostrarUsers(usuarios) {
        let ul = this.myf.getElementByID("usuarios");
        let lis = "";
        for (let u of usuarios) {
            //u.printinfo();
            lis += `<li>${u.name} ${u.email}</li>`;
        }
        ul.innerHTML = lis;
    }
    getSwitchStateById(id) {
        let sw = this.myf.getElementByID(id);
        let input = sw;
        return input.checked;
    }
}
