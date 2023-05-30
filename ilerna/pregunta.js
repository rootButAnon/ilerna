class PreguntaComponent extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        const question = this.getAttribute('question')
        const id = question
        const a = this.getAttribute('answera')
        const b = this.getAttribute('answerb')
        const c = this.getAttribute('answerc')
        const d = this.getAttribute('answerd')
        const numero = this.getAttribute('numero')
        const identificador = this.getAttribute('test-name') + '-' + numero
        this.innerHTML=`
<style>
.badQuestion{
  border: 1px solid red;
}
</style>

<div class="pregunta" id="`+id+`" name="`+identificador+`">
<p class="txt">`+question+`</p>
<div class="listaPreguntas">
  <div class="respuesta">
    <input type="radio" name="`+identificador+`" id="`+identificador+'-'+`a" />
    <label for="`+identificador+'-'+`a">`+a+`</label>
  </div>
  <div class="respuesta">
    <input type="radio" name="`+identificador+`" id="`+identificador+'-'+`b" />
    <label for="`+identificador+'-'+`b">`+b+`</label>
  </div>
  <div class="respuesta">
    <input type="radio" name="`+identificador+`" id="`+identificador+'-'+`c" />
    <label for="`+identificador+'-'+`c">`+c+`</label>
  </div>
  <div class="respuesta">
    <input type="radio" name="`+identificador+`" id="`+identificador+'-'+`d" />
    <label for="`+identificador+'-'+`d">`+d+`</label>
  </div>
</div>
</div>

          `
        
        
    }
    getRootElement() {
        // Verificar si el componente utiliza shadow DOM
        if (this.shadowRoot) {
          // Si utiliza shadow DOM, se obtiene el elemento raíz desde shadowRoot
          return this.shadowRoot;
        } else {
          // Si no utiliza shadow DOM, se obtiene el elemento raíz desde getRootNode()
          return this.getRootNode();
        }
      }
    
}

window.customElements.define('pregunta-component', PreguntaComponent)