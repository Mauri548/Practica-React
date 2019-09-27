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
    this.handleAddTarea = this.handleAddTarea.bind(this);
  }

  handleAddTarea(tarea){
    this.setState ({
      tareas: [...this.state.tareas, tarea]
    })
  }

  removerTarea(indice){
    console.log(indice)
    this.setState ({
      tareas: this.state.tareas.filter((e, i) => {
        return i !== indice
      })
    })
  }

  render(){
    const tareas = this.state.tareas.map((tarea, i) =>{ //el evento map recorre 1 a 1 las tareas
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
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removerTarea.bind(this, i)}>Eliminar</button>
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
            <img src={logo} className="App-logo" alt="logo" />
            <FormularioTarea onAddTarea={this.handleAddTarea}/>
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

