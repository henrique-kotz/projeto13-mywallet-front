import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import UserContext from '../contexts/UserContext';

import Logo from './Logo';
import Input from './Input';
import SubmitButton from './SubmitButton';
import StyledText from './StyledText';

export default function SignInPage() {
    const [userInputs, setUserInputs] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    
    async function login(e) {
        e.preventDefault();
        
        try {
            const { data } = await axios.post('http://localhost:5000/', userInputs);
            const { name, token } = data;
            setUser({name, token});
            navigate('/home');
        } catch(err) {
            alert(err.response.data);
        }
    }

    return (
        <Container>
            <Logo />

            <form onSubmit={login}>
                <Input type='email' placeholder='E-mail' required
                    value={userInputs.email}
                    onChange={e => setUserInputs({...userInputs, email: e.target.value})}
                />

                <Input type='password' placeholder='Senha' required
                    value={userInputs.password}
                    onChange={e => setUserInputs({...userInputs, password: e.target.value})}
                />

                <SubmitButton type='submit'>Entrar</SubmitButton>
            </form>

            <Link to='/sign-up'>
                <StyledText>Primeira vez? Cadastre-se!</StyledText>
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