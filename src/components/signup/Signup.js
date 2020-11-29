import Axios from 'axios';
import React, { useState } from 'react';
import { TextFinish,
     DivFinish, 
     DivImg, 
     Img,
     DivOut, 
     FormSignup, 
     Input, 
     Button, 
     SignupText,
     DivForm,
     TextNewRegister,
    } from './Styles';
import logo from '../../img/logo.png'

export const url = "https://hackathon.tecnologiaunica.com.br/api/ConexaoTech"

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

const validation = (body) =>{
    const bodyNames = [Object.keys(body)];
    const bodyValues = [Object.values(body)];

    for(let i = 0; i < bodyValues.length; i++){
        if(!bodyValues[i]){
            alert(`"${bodyNames[i]}" deve ser preenchido`)
        }
    }
};

export default function Signup () {
    const { form, onChange, resetState } = useForm({
        name:"", 
        age: "", 
        email:"", 
        city:""
    });
    const [state, setState] = useState(false)

    const registerUser = (input) => {
      Axios.post(url, input).then((response) =>{
        setState(true)
        resetState()
      }).catch((error) =>{
        console.log(error.message)
      })
    }
  
    const onSubmit = (event) => {
        event.preventDefault()
        const body = {
          "nome": form.name,
          "idade": Number(form.age),
          "email": form.email,
          "cidade": form.city
        }
        
        validation(body)

        registerUser(body)
    }

    const clickChangeState = () =>{
        setState(false)
    }

    const onType = (event) =>{
        const { name, value } = event.target

        onChange(name,value)
    }

    return(
        <DivOut>
            <DivImg>
                <Img src={logo}/>
            </DivImg>
            <DivForm>
                <FormSignup onSubmit={onSubmit}>
                    <SignupText>Signup</SignupText>
                    <Input
                        type = "text"
                        value={form.name} 
                        name = "name"
                        onChange = {onType}
                        placeholder = "Name"
                        required
                    />
                    <Input
                        type = "text"
                        value={form.age} 
                        name = "age"
                        onChange = {onType}
                        placeholder = "Age"
                        required
                    />
                    <Input
                        type = "email"
                        value={form.email} 
                        name = "email"
                        onChange = {onType}
                        placeholder = "Email"
                        required
                    />
                    <Input
                        type = "text"
                        value={form.city} 
                        name = "city"
                        onChange = {onType}
                        placeholder = "City"
                        required
                    />
                    <DivFinish state={state}>
                        <TextFinish>Thanks!</TextFinish>
                        <TextNewRegister onClick={clickChangeState}>New register? click here</TextNewRegister>
                    </DivFinish>
                    <Button>Confirm</Button>
                </FormSignup>
            </DivForm>
        </DivOut>
    )
}
  