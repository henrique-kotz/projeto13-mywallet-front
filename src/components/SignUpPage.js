import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";

import Logo from './Logo';
import Input from './Input';
import SubmitButton from './SubmitButton';
import StyledText from './StyledText';

export default function SignUpPage() {
    const [userInputs, setUserInputs] = useState({
        username: '',
        email: '',
        password: '',
        repeat_password: ''
    });
    const navigate = useNavigate();

    async function register(e) {
        e.preventDefault();
        
        try {
            const { data } = await axios.post('http://localhost:5000/sign-up', userInputs);
            console.log(data);
            navigate('/');
        } catch(err) {
            alert(err.response.data);
        }
    }

    return (
        <Container>
            <Logo />

            <form onSubmit={register}>
                <Input type='text' placeholder='Nome' required
                    value={userInputs.username}
                    onChange={e => setUserInputs({...userInputs, username: e.target.value})}
                />

                <Input type='email' placeholder='E-mail' required
                    value={userInputs.email}
                    onChange={e => setUserInputs({...userInputs, email: e.target.value})}
                />

                <Input type='password' placeholder='Senha' required
                    value={userInputs.password}
                    onChange={e => setUserInputs({...userInputs, password: e.target.value})}
                />

                <Input type='password' placeholder='Confirme a senha' required
                    value={userInputs.repeat_password}
                    onChange={e => setUserInputs({...userInputs, repeat_password: e.target.value})}
                />

                <SubmitButton type='submit'>Cadastrar</SubmitButton>
            </form>

            <Link to='/'>
                <StyledText>Já tem uma conta? Entre agora!</StyledText>
            </Link>

        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;