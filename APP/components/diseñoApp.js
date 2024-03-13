// import {getData} from "../../API/APIs"

class desingApp extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.selection();
    }
    render(){
        this.innerHTML = /* html*/ `
        <h1 class="tittle">¿Que diseño quieres que tenga tu App?</h1>
        <section id="desingShow"class="container">
            
            <button id="desingOption1"class="container_option">
                <img src="RecursosExamen/answer-3-1.png">
                <h3>Interfaz sencilla</h3>
            </button>
            <button id="desingOption2" class="container_option">
                <img src="RecursosExamen/answer-3-2.png">
                <h3>Interfaz personalizada</h3>
            </button>
            <button id="desingOption3" class="container_option">
                <img src="RecursosExamen/answer-3-3.png"> 
                <h3>Interfaz replicada de la web</h3>
            </button>
            <button id="desingOption3" class="container_option">
                <img src="RecursosExamen/answer-3-4.png"> 
                <h3>No necesito diseño</h3>
            </button>
        </section>
        `
    }
    selection() {
        const containerDesing = document.querySelector('#desingShow')
        const option1 = document.querySelector('#desingOption1')
        option1.addEventListener('click', function(){
            console.log('si')
            containerDesing.style.display='none'
        })
        const option2 = document.querySelector('#desingOption2')
        option2.addEventListener('click', function(){
            console.log('si')
            containerDesing.style.display='none'
        })
        const option3= document.querySelector('#desingOption3')
        option3.addEventListener('click', function(){
            console.log('si')
            containerDesing.style.display='none'
        })
        const option4= document.querySelector('#desingOption4')
        option4.addEventListener('click', function(){
            console.log('si')
            containerDesing.style.display='none'
        })
    }
}
customElements.define("desing-app", desingApp);