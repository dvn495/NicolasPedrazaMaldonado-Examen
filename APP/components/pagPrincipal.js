import {getData, postData} from "../../API/APIs.js"


class pagPrincipal extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.selection();
    }
    render(){
        this.innerHTML = /* html*/ `
        <div id="principal" class="container-principal">
            <img src='RecursosExamen/Captura desde 2024-03-13 07-36-49.png'>
            <span>
             <h1>¿Cuanto cuesta desarrollar mi<h1><h1 class="tittleColor">app GBP?</h1>
            </span>
            <h3>calcula de forma rapida el costo para crear  tu app, contestando estas sencillas preguntas</h3>
            <button id="start">EMPEZAR</button>
        <div>
        `
    }
    selection() {
        addEventListener("DOMContentLoaded", () => {
            const start = document.querySelector('#start')
            start.addEventListener('click', function(){
                getData()
                    .then((response)=>{
                        if(response.ok){
                            return response.json();
                        } else {
                            throw new Error('error')
                        }
                    })
                    .then((responseData)=> {
                        let generatedID = (responseData.length + 1)
                        const data= {
                            id: generatedID,
                            name: " ",
                            contact: 0,
                            email: " ",
                            cotizacion: 0 
                        }
                        postData(data)
                        
                    })
                    document.querySelector('#principal').style.display='none'
                    
                    
                
            })
        })
        
    }
    
}
function passID(generatedID){
    return generatedID
}
customElements.define("pag-principal", pagPrincipal);
export{passID as id}