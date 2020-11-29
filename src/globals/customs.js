import { useState } from "react";

export const useForm = (initialState) =>{
    const [form, setForm] = useState(initialState)

    const onChange = (name, value) =>{
        const newForm = {...form, [name]: value};

        setForm(newForm)
    };

    const resetState = () =>{
        setForm(initialState)
    };

    return {form, onChange, resetState}
};

export const validation = (body) =>{
    const bodyNames = [Object.keys(body)];
    const bodyValues = [Object.values(body)];

    for(let i = 0; i < bodyValues.length; i++){
        if(!bodyValues[i]){
            alert(`"${bodyNames[i]}" deve ser preenchido`)
        }
    }
};