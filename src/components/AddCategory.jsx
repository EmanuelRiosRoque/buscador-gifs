import { useState } from 'react'


export default function AddCategory({onNewCategory}) {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({target}) => { setInputValue(target.value) }

    const onSubmit = (e) => { 
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;

        onNewCategory(inputValue);
        setInputValue('');  
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gif"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
