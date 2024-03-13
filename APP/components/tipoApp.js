// import {getData} from "../../API/APIs"

class typeApp extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.selection();
    }
    render(){
        this.innerHTML = /* html*/ `
        <h1 class="tittle">¿Que tipo de app necesta?</h1>
        <section id="typeShow"class="container">
            
            <button href="#"id="typeOption1"class="container_option">
                <img src="RecursosExamen/answer-2-1.png">
                <h3>Aplicacion Andriod</h3>
            </button>
            <button id="typeOption2" class="container_option">
                <img src="RecursosExamen/answer-2-2.png">
                <h3>Aplicacion IOS</h3>
            </button>
            <button id="typeOption3" class="container_option">
                <img src="RecursosExamen/answer-2-3.png"> 
                <h3>APlicacion Windows Phone</h3>
            </button>
            <button id="typeOption4" class="container_option">
                <img src="RecursosExamen/answer-2-4.png"> 
                <h3>Aplicacion Andriod + IOS</h3>
            </button>
        </section>
        `
    }
    selection() {
        const containerType = document.querySelector('#typeShow')
        const option1 = document.querySelector('#typeOption1')
        option1.addEventListener('click', function(){
            console.log('si')
            containerType.style.display='none'
        })
        const option2 = document.querySelector('#typeOption2')
        option2.addEventListener('click', function(){
            console.log('si')
            containerType.style.display='none'
        })
        const option3= document.querySelector('#typeOption3')
        option3.addEventListener('click', function(){
            console.log('si')
            containerType.style.display='none'
        })
        const option4= document.querySelector('#typeOption4')
        option4.addEventListener('click', function(){
            console.log('si')
            containerType.style.display='none'
        })
    }
}
customElements.define("type-app", typeApp);