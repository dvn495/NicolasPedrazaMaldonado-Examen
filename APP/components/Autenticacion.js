// import {getData} from "../../API/APIs"

class autenticacion extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.selection();
    }
    render(){
        this.innerHTML = /* html*/ `
        <section id="autenticacionShow">
            <h1 class="tittle">Tu sistema necesita autenticacion?</h1>
            <div class="container">   
                <button href="#"id="autenticacionOption1"class="container_option">
                    <img src="RecursosExamen/answer-5-1.png">
                    <h3>Si, con redes sociales y email</h3>
                </button>
                <button id="autenticacionOption2" class="container_option">
                    <img src="RecursosExamen/answer-5-2.png">
                    <h3>Si, con email</h3>
                </button>
                <button id="autenticacionOption3" class="container_option">
                    <img src="RecursosExamen/answer-5-3.png"> 
                    <h3>No</h3>
                </button>
                <button id="autenticacionOption4" class="container_option">
                    <img src="RecursosExamen/answer-5-4.png"> 
                    <h3>No lo se todavia</h3>
                </button>ç
            </div>
        </section>
        `
    }
    selection() {
        const containerAutenticacion = document.querySelector('#autenticacionShow')
        const option1 = document.querySelector('#autenticacionOption1')
        option1.addEventListener('click', function(){
            console.log('si')
            containerAutenticacion.style.display='none'
        })
        const option2 = document.querySelector('#autenticacionOption2')
        option2.addEventListener('click', function(){
            console.log('si')
            containerAutenticacion.style.display='none'
        })
        const option3= document.querySelector('#autenticacionOption3')
        option3.addEventListener('click', function(){
            console.log('si')
            containerAutenticacion.style.display='none'
        })
        const option4= document.querySelector('#autenticacionOption4')
        option4.addEventListener('click', function(){
            console.log('si')
            containerAutenticacion.style.display='none'
        })
    }
}
customElements.define("autenticacion-page", autenticacion );