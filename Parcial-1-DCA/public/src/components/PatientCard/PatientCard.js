class PatientsCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    static get observedAttributes(){
        return ['nombre', 'especie', 'raza','fecha','sintoma','state']
    }
 
    connectedCallback(){
        this.render()

    }
    attributeChangedCallback( propName, oldValue, newValue ){
        if (oldValue !== newValue){
            this[propName] = newValue
            this.render();
        }
    }
    toggleTask(){
        this.state = !this.state
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
        <li class=${this.state ? "Atendido" : "Paciente"}>
        <h1>${this.nombre}</h1>
        <h2>${this.especie}</h2>
        <h2>${this.raza}</h2>
        <h2>${this.fecha}</h2>
        <h2>${this.sintoma}</h2>
        <p>${!this.state ? "Pendiente" : "Atendido"}</p>
        <input type="checkbox" ${this.state ? "checked" : ""} class="task-checkbox">
    </li>
        `;

        let checkbox = this.shadowRoot.querySelector('.task-checkbox')
        checkbox.addEventListener('change', () => this.toggleTask())

        this.shadowRoot.innerHTML = `
        <li class=${this.state ? "Atendido" : "Paciente"}>
        <h1>${this.nombre}</h1>
        <h2>${this.especie}</h2>
        <h2>${this.raza}</h2>
        <h2>${this.fecha}</h2>
        <h2>${this.sintoma}</h2>
        <p>${!this.state ? "Pendiente" : "Atendido"}</p>
        <input type="checkbox" ${this.state ? "checked" : ""} class="task-checkbox">
    </li>
        `;
    //si lo llamo le aplico un appendchildal checkbox, que capotures los checkbox true y despues en el otro le hago push en el arreglo de atendidos
        

        
    }

}
customElements.define('patient-card',PatientsCard)
export default PatientsCard;