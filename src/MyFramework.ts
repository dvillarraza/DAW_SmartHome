interface GETResponseListener{
    handleGETResponse(status:number, response:string):void;
    }

interface POSTResponseListener{
    handlePOSTResponse(status:number, response:string):void;
    }

    //Ejercicio 4
class MyFramework {

    getElementByID(id:string): HTMLElement { 
        return document.getElementById(id);
    }

    getElementByEvent(e:Event):HTMLElement{
        return <HTMLElement>e.target
    }

    configClick(id:string,listener:EventListenerObject): void{
        //buscar el elemento por su id
        let el:HTMLElement = this.getElementByID(id);
        el.addEventListener("click",listener);
    }

    requestGET(url:string, listener: GETResponseListener):void{
        let xhr: XMLHttpRequest;
        xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() //Se va ejecutando cada vez que hay un cambio (tarda mucho tiempo en ejecutarse no es inmediato)
        {
            if(xhr.readyState == 4)
            {
                if(xhr.status == 200) //Vino un contenido de respuesta
                {
                    listener.handleGETResponse(xhr.status,xhr.responseText);
                }
                else
                {
                    listener.handleGETResponse(xhr.status,null);
                }
            }
        };

        xhr.open('GET', url, true);
        xhr.send(null);
    }

    //El parametro data es lo que mando al servidor, puede ser un objeto Java o un diccionario
    requestPOST(url:string, data:object, listener:POSTResponseListener):void{
        
        let xhr = new XMLHttpRequest();
        
        //Recibo la respuesta
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if(xhr.status == 200)
                    listener.handlePOSTResponse(xhr.status,xhr.responseText);
                else
                   listener.handlePOSTResponse(xhr.status,null);
            }
        };

        xhr.open("POST", url);
        
        // envio JSON en body de request (Usar con NODEJS)
        //xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        //xhr.send(JSON.stringify(data));
       
        //______________________________
       
        // envio Formdata en body de request (Usar con Apache,PythonWS,etc.)
        let formData:FormData = new FormData();
        for(let key in data) {
            formData.append(key, data[key]); //Diccionario = Clave, Valor
        }
        
        xhr.send(formData) //Los datos van en un formato particular asi el server los puede parsear e interpretar
        //______________________________
    }
    
}