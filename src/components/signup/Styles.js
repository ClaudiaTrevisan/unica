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
`;

export const Img = styled.img`
    width: 203px;
    margin-top: 18px;
    padding-top: 15px;
`

export const FormSignup = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60vh;

`;

export const SignupText= styled.p`
    margin-bottom: 33px;
    font-size: 1rem;
    font-weight: 400;
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
`;

export const DivFinish = styled.div`
    display: ${(props=> props.state ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    background-color: #008b8b75;
    width: 90vw;
    height: 40vh;
    align-items: center;
    justify-content: center;
`;
export const P = styled.p`
    text-align: center;
    font-weight: 700;
    font-size: 4rem;
`;

export const TextNewRegister = styled.p`
    font-size: .7rem;
    font-weight: 700;
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
`



