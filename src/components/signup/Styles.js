import styled from 'styled-components'

export const DivOut = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: relative;
`;

export const DivImg = styled.div`
   height: 203px; 

   @media (min-width: 640px){
       height: 184px;
       width: 100%;
       background-color: #E4D9D9;
       box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   }
`;

export const Img = styled.img`
    width: 203px;
    margin-top: 18px;
    padding-top: 15px;

    @media (min-width: 640px){
        width: 264px;
        height: 150px;
        padding: 0px;
        margin-left: 28px;
    }
`;

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 640px){
        position: absolute;
        top: 128px;
        width: 28vw;
        height: 65vh;
        background-color: #FFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`
export const FormSignup = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60vh;

    @media (min-width: 640px){
        margin-top: 25px;
    }
`;

export const SignupText= styled.p`
    margin-bottom: 33px;
    font-size: 1rem;
    font-weight: 400;

    @media (min-width: 640px){
        font-weight: 600;
    }
`;  

export const Input = styled.input`
    border: 2px solid gray;
    border-radius: 10px;
    width: 238px;
    height: 37px; 
    margin-bottom: 11px;
    padding-left: 12px;

    ::placeholder {
        font-size: 1.1rem;
        font-weight: 400;
    }

    @media (min-width: 640px){
        width: 65%;
    }
`;

export const DivFinish = styled.div`
    display: ${(props=> props.state ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    background-color: #0e1010c2;
    width: 90vw;
    height: 40vh;
    align-items: center;
    justify-content: center;

    @media (min-width: 640px){
        width: 300px;
    }
`;

export const TextFinish = styled.p`
    text-align: center;
    font-weight: 700;
    font-size: 2.2rem;
    color: white;
`;

export const TextNewRegister = styled.p`
    font-size: .7rem;
    font-weight: 700;
    cursor: pointer;
    color: #e6cbcb;
`;

export const Button = styled.button`
    height: 31px;
    width: 141px;
    border-radius: 10px;
    background-color: #AC121D;
    cursor: pointer;
    border: none;
    box-shadow: 0px 4px 4px 0px gray;
    font-size: 1.1rem;
    margin-top: 45px;

    :focus{
      outline: none;
      box-shadow: 0px 4px 4px #AC121D;
    };

    :hover{
        transform: scale(0.9);
        transition: all 0.3s ease 0s;
    }
`;



