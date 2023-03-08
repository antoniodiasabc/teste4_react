import React from 'react'

class Form4 extends React.Component{
 constructor(props){
    super(props);
    this.state = {variablecontrolada: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(event){
    this.setState({variablecontrolada : event.target.value});
 }

 handleSubmit(event){
    event.preventDefault();
    window.location.href = "https://www.google.com/search?q=" + this.state.variablecontrolada;    
 }

 render(){
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Valor Pesquisado:
            <input type="text" id="pesquisado" value={this.state.variablecontrolada} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      );
    }  
}
export default Form4;