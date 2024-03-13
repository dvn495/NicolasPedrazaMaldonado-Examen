// import {getData} from "../../API/APIs"

class qualityLevel extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.selection();
    }
    render(){
        this.innerHTML = /* html*/ `
        <h1 class="tittle">¿Que nivel de calidad estas buscando?</h1>
        <section id="qualityShow"class="container">
            
            <button href="#"id="qualityOption1"class="container_option">
                <img src="RecursosExamen/answer-1-1.png">
                <h3>Calidad optima</h3>
            </button>
            <button id="qualityOption2" class="container_option">
                <img src="RecursosExamen/answer-1-2.png">
                <h3>Buena relacion calidad/precio</h3>
            </button>
            <button id="qualityOption3" class="container_option">
                <img src="RecursosExamen/answer-1-3.png"> 
                <h3>No me importa tanto la calidad</h3>
            </button>
        </section>
        `
    }
    selection() {
        const container = document.querySelector('#qualityShow')
        const option1 = document.querySelector('#qualityOption1')
        option1.addEventListener('click', function(){
            console.log('si')
            container.style.display='none'
        })
        const option2 = document.querySelector('#qualityOption2')
        option2.addEventListener('click', function(){
            console.log('si')
            container.style.display='none'
        })
        const option3= document.querySelector('#qualityOption3')
        option3.addEventListener('click', function(){
            console.log('si')
            container.style.display='none'
        })
    }
}
customElements.define("quality-level", qualityLevel);