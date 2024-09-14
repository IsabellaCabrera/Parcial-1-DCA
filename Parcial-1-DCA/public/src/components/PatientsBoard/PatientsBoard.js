import '../PatientCard/PatientCard.js'

class PatientsBoard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.patient = []
        this.atendidos = []
    }
    
 connectedCallback

 

    connectedCallback(){
        this.render()
        
        const form = this.shadowRoot.querySelector('.user-form')
        form.addEventListener("submit", (e)=>{
           
            e.preventDefault()
        
         
            const nombre = this.shadowRoot.querySelector('.input-nombre').value
            const especie = this.shadowRoot.querySelector('.input-especie').value
            const raza = this.shadowRoot.querySelector('.input-raza').value
            const date = this.shadowRoot.querySelector('.input-date').value
            const sintoma = this.shadowRoot.querySelector('.input-sintoma').value

           
            this.patient.push({nombre,especie,raza,date,sintoma, state: false})

           
            this.addPatient({nombre,especie,raza,date,sintoma, state: false})
            
            
            form.reset()
        })
    }

    

    
    render(){ this.shadowRoot.innerHTML = `
    <h2>Añadir Paciente</h2>
    <form class="user-form">
    <input type="text" placeholder="nombre" class="input-nombre" required>
    <input type="text" placeholder="especie" class="input-especie" required>
    <input type="text" placeholder="raza" class="input-raza" required>
    <input type="date" placeholder="fecha ingreso" class="input-date" required>
    <input type="text" placeholder="sintoma" class="input-sintoma" required>

    <button>Agregar paciente</button>
    <ul class="patientes-container">
    </ul>
   </form>

    `}
        

        addPatient({nombre,especie,raza,date,sintoma}){const patientsContainer = this.shadowRoot.querySelector('.patientes-container')
        patientsContainer.innerHTML += `
        <patient-card
        
        nombre="${nombre}"
        especie="${especie}"
        raza="${raza}"
        fecha="${date}"
        sintoma="${sintoma}"
        ></patient-card>
        `}
        
     
    
}
customElements.define('patients-board',PatientsBoard)
export default PatientsBoard;


