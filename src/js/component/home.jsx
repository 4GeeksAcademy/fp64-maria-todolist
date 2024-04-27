import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
    const [inputState, setInputState] = useState('');
    const [listaOriginal, setListaOriginal] = useState([{ name: 'Cosas pendientes' }]);
    const [listaFiltrada, setListaFiltrada] = useState([]);
    const [textoNuevo, setTextoNuevo] = useState('');

    useEffect(() => {
        if (inputState === '') setListaFiltrada(listaOriginal);
        if (inputState !== '') {
            const estadoActualizado = listaOriginal.filter((item) => {
                return item.name.toLowerCase().includes(inputState.toLowerCase());
            });
            setListaFiltrada(estadoActualizado);
        }
    }, [listaOriginal, inputState]);

    const agregarNuevoMiembro = () => {
        setListaOriginal([...listaOriginal, { name: textoNuevo }]);
        setTextoNuevo('');
    };

    const eliminarTarea = (index) => {
        const nuevaLista = listaOriginal.filter((_, i) => i !== index);
        setListaOriginal(nuevaLista);
    };

    return (
        <div className="background">
            <div className="task-list-container">
                <div className="task-list">
                    <input
                        type="text"
                        name=""
                        id=""
                        onChange={(event) => setTextoNuevo(event.target.value)}
                        value={textoNuevo}
                    />
                    <button className='agregar' onClick={agregarNuevoMiembro}>Agregar</button>

                    <ul>
                        {listaFiltrada.map((item, index) => {
                            return (
                                <li key={index}>
                                    {item.name}
                                    <button className="eliminar" onClick={() => eliminarTarea(index)}><i className="fas fa-times"></i></button>
                                </li>
                            );
                        })}
                    </ul>
					<div className="task-counter">
                Tareas: {listaFiltrada.length}
            </div>
                </div>
				
            </div>
			
        </div>
    );
}

export default Home;
