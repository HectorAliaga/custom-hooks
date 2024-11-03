import { useState } from "react";


export const useForm = ( initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({ target }) => { //  target es el input
        const { name, value } = target; // name es el name del input, value es el valor del input
        setFormState({ // setFormState es la funcion que modifica el estado
            ...formState, // formState es el estado actual
            [name] : value // [name] es el name del input, value es el valor del input
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,//devuelve todos los campos del formState (gracias al operador de propagación ...formState).
        formState,
        onInputChange,
        onResetForm,
    }
}
