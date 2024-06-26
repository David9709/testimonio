import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Lo que dicen los egresados</h1>
        <Testimonio 
          nombre='Natalia Valencia'
          departamento='Risaralda'
          imagen='natalia'
          cargo='Ingeniera Industrial'
          empresa='Bimbo'
          testimonio='Mi experiencia estudiando en la UTP ha sido increíblemente enriquecedora. Desde el primer día, me sentí parte de una comunidad vibrante y diversa, donde cada día aprendo algo nuevo y desafiante.' />
         <Testimonio 
          nombre='Luisa Herrera'
          departamento='Nariño'
          imagen='luisa'
          cargo='Licenciada en Pedagogia Infantil'
          empresa='Baltasar'
          testimonio='La UTP no solo me ha proporcionado una educación de alta calidad en mi campo de interés, sino que también me ha ofrecido oportunidades únicas para desarrollar habilidades prácticas a través de proyectos y prácticas en empresas líderes del sector.' />
         <Testimonio 
          nombre='Santiago Pelaez'
          departamento='Antioquia'
          imagen='santiago'
          cargo='Ingeniero de Maderas'
          empresa='Baires LLC'
          testimonio='Mi tiempo en la UTP ha sido una verdadera aventura de crecimiento personal y académico. Desde el primer día, me impresionó la infraestructura moderna y los laboratorios equipados con tecnología de punta que la universidad ofrece.' />    
      </div>
    </div>
  );
}

export default App;
