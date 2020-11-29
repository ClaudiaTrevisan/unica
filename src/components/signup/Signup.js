import Axios from 'axios';
import React, { useState } from 'react';
import { useForm, validation } from '../../globals/customs';
import logo from '../../img/logo.png'
import { P,
     DivFinish, 
     DivImg, 
     Img,
     DivOut, 
     FormSignup, 
     Input, 
     Button, 
     SignupText,
     TextNewRegister,
} from './Styles';

export const url = "https://hackaton.tecnologiaunica.com.br/api"

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
          "name": form.name,
          "age": Number(form.age),
          "email": form.email,
          "city": form.city
        }
        
        validation(body)
        
        registerUser(body, resetState)
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
                    <P>Thanks!</P>
                    <TextNewRegister 
                    onClick={clickChangeState}>
                        New register? click here
                    </TextNewRegister>
                </DivFinish>
                <Button>Confirm</Button>
            </FormSignup>
        </DivOut>
    )
}
  