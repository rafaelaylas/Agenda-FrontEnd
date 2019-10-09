import {Component} from 'react';

const url ="http://localhost:8080/apiAgenda/";
const urlGetContactos="leerAgenda";
const urlGetContactosById="leerAgenda/idBusqueda";
const urlInsertContacto="/insertContacto/Contacto";
const urlUpdateContacto='/updateContacto/Contacto';
const urlDeleteContacto='/deleteContacto/Contacto';

class ApiController extends Component
{
   
    getContactos(okBusqueda)
    {
        const endpoint = `${url}${urlGetContactos}`;
        //console.log("Buscando")
       fetch(endpoint).then ((response) => {
            console.log("response",response);
            return response.json();
        }).then (responseData => {
                //console.log(responseData);
            
                //console.log("Recibi datos");
                okBusqueda(responseData);
                
          
          
          
        });
    }
    getContactosById(data)
    {
        const endpoint = `${url}${urlGetContactosById}`;
        //console.log("Buscando")
        console.log(data);
       fetch(endpoint,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data) // data can be `string` or {object}!
        }).then ((response) => {
            
            return response.json();
        }).then (responseData => {
                console.log(responseData);
            
                //console.log("Recibi datos");
                
        });
    }
    insertContacto(data)
    {
        console.log("guardo contacto",data);
        
        
        const endpoint = `${url}${urlInsertContacto}`;
        console.log("Guardando");
            fetch (endpoint,{
            method:'POST',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then ((response) => {
            console.log("response");
            console.log(response);
            return response.json();
        })
        
    }
    updateContacto(data)
    {
        console.log("actualizo contacto",data);
        
        
        const endpoint = `${url}${urlUpdateContacto}`;
        console.log("Guardando");
            fetch (endpoint,{
            method:'POST',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then ((response) => {
            console.log("response",response);
                       
            return response.json();
        }).then((rta)=> { console.log("Respuesta",rta)})
        
    }
    deleteContacto(data)
    {
        console.log("elimino contacto",data);
        
        
        const endpoint = `${url}${urlDeleteContacto}`;
        console.log("Guardando");
            fetch (endpoint,{
            method:'DELETE',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then ((response) => {
            console.log("response");
            console.log(response);
            return response.json();
        })
        
    }
}
export default new ApiController();