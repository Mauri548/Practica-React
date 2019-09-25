import React from 'react';

class Navegacion extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <div>
                    <a href="#">{this.props.titulo}</a>
                    <span className="badge badge-pill badge-light ml-2">{this.props.T}</span>
                </div>
            </nav>
        );
    }
}

export default Navegacion;