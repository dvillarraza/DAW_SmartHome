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
    requestPOST(url, data, listener) {
        let formData = new FormData();
        for (let key in data) {
            formData.append(key, data[key]);
        }
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200)
                    listener.handlePOSTResponse(xhr.status, xhr.responseText);
                else
                    listener.handlePOSTResponse(xhr.status, null);
            }
        };
        xhr.open("POST", url);
        xhr.send(formData);
    }
}
