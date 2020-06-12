//Ejercicio 4
class MyFramework {
    getElementByID(id) {
        return document.getElementById(id);
    }
    getElementByEvent(e) {
        return e.target;
    }
    configClick(id, listener) {
        //buscar el elemento por su id
        let el = this.getElementByID(id);
        el.addEventListener("click", listener);
    }
    requestGET(url, listener) {
        let xhr;
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) //Vino un contenido de respuesta
                 {
                    listener.handleGETResponse(xhr.status, xhr.responseText);
                }
                else {
                    listener.handleGETResponse(xhr.status, null);
                }
            }
        };
        xhr.open('GET', url, true);
        xhr.send(null);
    }
    //El parametro data es lo que mando al servidor, puede ser un objeto Java o un diccionario
    requestPOST(url, data, listener) {
        let xhr = new XMLHttpRequest();
        //Recibo la respuesta
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200)
                    listener.handlePOSTResponse(xhr.status, xhr.responseText);
                else
                    listener.handlePOSTResponse(xhr.status, null);
            }
        };
        xhr.open("POST", url);
        console.log(data);
        // envio JSON en body de request (Usar con NODEJS)
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(data));
        //______________________________
        // envio Formdata en body de request (Usar con Apache,PythonWS,etc.)
        /*  let formData:FormData = new FormData();
          for(let key in data) {
              formData.append(key, data[key]); //Diccionario = Clave, Valor
          }
          
          xhr.send(formData) //Los datos van en un formato particular asi el server los puede parsear e interpretar*/
        //______________________________
    }
}
