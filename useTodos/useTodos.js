import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];//esto es para que cuando se recargue la pagina, los todos no se borren, sino que se mantengan en el estado
}
    
export const useTodos = () => {
    
    const [todos, dispatch] = useReducer( todoReducer, [], init );//esto funciona de la misma manera que el usestate, pero en lugar de tener un solo valor, tiene un objeto con un valor y una funcion que modifica ese valor
    
    useEffect(() => {//useEffect es un hook que se ejecuta cuando el componente se renderiza por primera vez, y cada vez que el estado cambia.
      // En este caso, se ejecuta cada vez que el estado de "todos" cambia, y cuando el componente se renderiza por primera vez. En este caso, se ejecuta la funcion
      
      
      localStorage.setItem('todos', JSON.stringify( todos ));//localStorage es una API de javascript que permite guardar datos en el navegador del usuario. En este caso, se guarda el estado de "todos" en el localStorage, pero en formato JSON
    
    }, [todos])
    

    const handleNewTodo = ( todo ) => { //ese todo será el payload de todoReducer
        const action = {
            type: 'add',
            payload: todo,
        }
        dispatch( action ); //dispatch es la funcion que se pasa como argumento en el useReducer como "todoReducer"
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({ //
            type: 'delete',
            payload: id,
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: 'toggle',
            payload: id,
        })
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
