import {postData} from "../../API/APIs"


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
        const start = document.querySelector('#start')
        start.addEventListener('click', function(){
            document.querySelector('#principal').style.display='none'
            const data= {
                name: " ",
                contact: 0,
                email: " ",
                cotizacion: 0 
            }
            postData(data)
        })
    }
}
customElements.define("pag-principal", pagPrincipal);