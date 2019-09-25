import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navegacion from './Components/navegacion'
import FormularioTarea from './Components/Formulario_Tareas'
import { tareas } from './Tareas.json'

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      tareas
    }
  }

  render(){
    const tareas = this.state.tareas.map((tarea, i) =>{
      return(
        <div className="col-md-4">
          <div className="card mt-4">          
            <div className="card-header">
              <h3>{tarea.titulo}</h3>
              <span className="badge badge-pill badge-danger ml-2">
              {tarea.prioridad}
              </span>
            </div>
            <div className="card-body">
              <p>{tarea.descripcion}</p>
              <p><b>- {tarea.responsable} -</b></p>
            </div>
          </div>
        </div>
      );
    })

  return(
    <div className="App">
      <Navegacion titulo="Tarea" T={this.state.tareas.length}/>

      <div className="conteiner">
        <div className="row">
          <div className="col-4">
            <FormularioTarea/>
          </div>
          <div className="col-8">
            <div className="row">
              {tareas}
            </div>
          </div>
        </div>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
  }
}

export default App;

