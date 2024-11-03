

export const todoReducer = ( initialState = [], action ) => { // initialState es el estado inicial, action es la accion que se va a realizar

    switch (action.type) {
        case 'add':
            return [...initialState, action.payload]; // el payload es el objeto que se va a agregar
        case 'delete':
            return initialState.filter( todo => todo.id !== action.payload); // el payload es el id del objeto que se va a eliminar
        case 'toggle':
            return initialState.map( todo => 
                (todo.id === action.payload)
                    ? {...todo, done: !todo.done}
                    : todo
            );
        default:
            return initialState;
    }
}