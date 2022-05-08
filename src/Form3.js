import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Form(){

    const [estados, setEstados] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3030/estados').then(response => {
            setEstados(response.data);
        })
    }, []);

    const [campos, setCampos] = useState({
        txtNome: '',
        txtIdade: 0,
        cmbUF: '0'
    });

    function handleInputChange(event){
        if(event === undefined){
            console.log('evento undefined');
        }else{
            campos[event.target.name] = event.target.value;
            console.log(event.target.name)
            setCampos(campos);
        }
    }

    function handleFormSubmit(event){
        event.preventDefault();
        console.log(campos);
        axios.post('http://localhost:3031/cadastro', campos).then(response => {
            alert(response.data.dados.length + ' cadastros!');
        })
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <fieldset>
                    <legend>
                        <h2>Dados de Cadastro</h2>
                    </legend>
 
                    <div>
                        <label>Nome:
                            <input type="text" name="txtNome" id="txtNome" onChange={handleInputChange} />
                        </label>
                    </div>
 
                    <div>
                        <label>Idade:
                            <input type="number" name="txtIdade" id="txtIdade" onChange={handleInputChange} />
                        </label>
                    </div>
 
                    <div>
                        <label>UF:
                            <select name="cmbUF" id="cmbUF" onChange={handleInputChange} >
                                <option value="0">Selecione uma opção</option>
                                {estados.map(estado => (<option key={estado.id} value={estado.id}>{estado.uf}</option>))}
                            </select>
                        </label>
                    </div>
                    <input type="submit" value="Salvar" />
                </fieldset>
            </form>
        </div>
    )
}
export default Form;