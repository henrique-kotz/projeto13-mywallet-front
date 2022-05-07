import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';
import Input from './Input';
import SubmitButton from './SubmitButton';
import StyledText from './StyledText';

export default function SignInPage() {
    
    function login(e) {
        e.preventDefault();
        console.log('login!');
    }

    return (
        <Container>
            <Logo />

            <form onSubmit={login}>
                <Input type='email' placeholder='E-mail' />
                <Input type='password' placeholder='Senha' />
                <SubmitButton>Entrar</SubmitButton>
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