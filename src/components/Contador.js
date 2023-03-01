import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { reset, restar, restar5, sumar5, sumar } from '../actions/contadorActions';

const Contador = () => {
    const state = useSelector((state)=>state);
    const dispatch = useDispatch()
    return (
        <div>
            <nav>
                <h2>Contador Redux </h2>
                <button onClick ={()=>dispatch(sumar5())}> +5</button>
                <button onClick ={()=>dispatch(sumar())}> +1</button>
                <button onClick ={()=>dispatch(reset())}> 0</button>
                <button onClick ={()=>dispatch(restar())}> -1</button>
                <button onClick ={()=>dispatch(restar5())}> -5</button>
            </nav>
            <h2>{state.contador}</h2>
        </div>
    );
};

export default Contador;