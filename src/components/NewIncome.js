import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import UserContext from '../contexts/UserContext';

import Input from './Input';
import SubmitButton from './SubmitButton';

export default function NewIncome() {
    const [userInputs, setUserInputs] = useState({
        value: '',
        description: ''
    });
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    }

    async function submitIncome(e) {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/home/income', userInputs, config);
            alert('Entrada salva com sucesso!');
            navigate('/home');
        } catch(err) {
            console.log(err.response);
        }
    }

    return (
        <Container>
            <Title>Nova entrada</Title>
            <form onSubmit={submitIncome}>
                <Input type='text' placeholder='Valor' required
                    value={userInputs.value}
                    onChange={e => setUserInputs({...userInputs, value: e.target.value})}
                />

                <Input type='text' placeholder='Descrição' required
                    value={userInputs.description}
                    onChange={e => setUserInputs({...userInputs, description: e.target.value})}
                />

                <SubmitButton type='submit'>Salvar Entrada</SubmitButton>
            </form>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Title = styled.h2`
    font-size: 26px;
    font-weight: 700;
    color: #fff;
    margin: 25px 24px 40px;
    align-self: flex-start;
`;