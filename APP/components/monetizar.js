// import {getData} from "../../API/APIs"

class monetizar extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.selection();
    }
    render(){
        this.innerHTML = /* html*/ `
        <section id="monetizarShow"> 
            <h1 class="tittle">¿Como monetizar tu app?</h1>
            <div class="container">
                
                <button id="monetizarOption1"class="container_option">
                    <img src="RecursosExamen/answer-4-1.png">
                    <h3>Aplicacion gratuita con publicidad</h3>
                </button>
                <button id="monetizarOption2"class="container_option">
                    <img src="RecursosExamen/answer-4-2.png">
                    <h3>Aplicacion de pago</h3>
                </button>
                <button id="monetizarOption3"class="container_option">
                    <img src="RecursosExamen/answer-4-3.png">
                    <h3>Compras dentro de la app</h3>
                </button>
                <button id="monetizarOption4"class="container_option">
                    <img src="RecursosExamen/answer-4-4.png">
                    <h3>Otros / No lo se todavia</h3>
                </button>
            <div>
        </section>
        `
    }
    selection() {
        const containerMonetizar = document.querySelector('#monetizarShow')
        const option1 = document.querySelector('#monetizarOption1')
        option1.addEventListener('click', function(){
            console.log('si')
            containerMonetizar.style.display='none'
        })
        const option2 = document.querySelector('#monetizarOption2')
        option2.addEventListener('click', function(){
            console.log('si')
            containerMonetizar.style.display='none'
        })
        const option3= document.querySelector('#monetizarOption3')
        option3.addEventListener('click', function(){
            console.log('si')
            containerMonetizar.style.display='none'
        })
        const option4= document.querySelector('#monetizarOption4')
        option4.addEventListener('click', function(){
            console.log('si')
            containerMonetizar.style.display='none'
        })
    }
}
customElements.define("monetizar-page", monetizar);