import { Link } from 'react-router-dom';
import styled from "styled-components";

import Logo from './Logo';
import Input from './Input';
import SubmitButton from './SubmitButton';
import StyledText from './StyledText';

export default function SignUpPage() {

    function register(e) {
        e.preventDefault();
        console.log('cadastrou!');
    }

    return (
        <Container>
            <Logo />

            <form onSubmit={register}>
                <Input type='text' placeholder='Nome' />
                <Input type='email' placeholder='E-mail' />
                <Input type='password' placeholder='Senha' />
                <Input type='password' placeholder='Confirme a senha' />
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