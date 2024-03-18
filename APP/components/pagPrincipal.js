import {newId, postData, getId} from "../../API/APIs.js"


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
        const start = this.querySelector('#start'); // Use `this` to refer to the current instance of the class
        start.addEventListener('click', async (e) => { // Receive `e` as a parameter here
            e.preventDefault();
            e.stopImmediatePropagation();
            try {
                let generatedID = await newId(); // Wait for the promise to resolve
                console.log(generatedID);
                    
                 // Wait for the post request to complete
                document.querySelector('#principal').style.display = 'none';
            } catch (error) {
                console.error('Error:', error.message);
            }
        });
    }
    
}
customElements.define("pag-principal", pagPrincipal);
