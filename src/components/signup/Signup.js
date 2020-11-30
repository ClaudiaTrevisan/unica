import axios from 'axios';
import React, { useState } from 'react';
import { validation, useForm } from '../../globals/customs'
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

export const url = "https://cors-anywhere.herokuapp.com/https://hackathon.tecnologiaunica.com.br/api/ConexaoTech"

export default function Signup () {
    const { form, onChange, resetState } = useForm({
        name:"", 
        age: "", 
        email:"", 
        city:""
    });
    const [state, setState] = useState(false)
    const [info, setInfo] = useState({id: 0, name: ''})

    const takeName = (id, name) =>{
        const arrayName = name.split(" ")
        setInfo({
            id: id, 
            name: arrayName[0]
        })
    }

    const registerUser = (input) => {
        axios.post(url, input).then((response) =>{
            takeName(response.data.Id, response.data.Nome)
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
                    <SignupText>Cadastro</SignupText>
                    <Input
                        type = "text"
                        value={form.name} 
                        name = "name"
                        onChange = {onType}
                        placeholder = "Nome"
                        required
                    />
                    <Input
                        type = "text"
                        value={form.age} 
                        name = "age"
                        onChange = {onType}
                        placeholder = "Idade"
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
                        placeholder = "Cidade"
                        required
                    />
                    <DivFinish state={state}>
                        <TextFinish>{`
                            Obrigado, ${info.name}.
                            Id: ${info.id}
                            `}
                        </TextFinish>
                        <TextNewRegister onClick={clickChangeState}>Novo cadastro? click aqui</TextNewRegister>
                    </DivFinish>
                    <Button>Confirma</Button>
                </FormSignup>
            </DivForm>
        </DivOut>
    )
}
  