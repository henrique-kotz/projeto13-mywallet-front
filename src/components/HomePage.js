import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';

import UserContext from '../contexts/UserContext';

export default function HomePage() {
    const { user } = useContext(UserContext);
    const [transactions, setTransactions] = useState([]);
    const navigate = useNavigate();
    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    }

    const [total, setTotal] = useState(0);
    function calculateBalance(data) {
        let sum = 0;
        data.forEach(elem => {
            if (elem.type === 'income') sum += elem.value;
                else sum -= elem.value;
        });
        return sum;
    }
    
    useEffect(() => {
        async function getData() {
            try {
                const { data } = await axios.get('http://localhost:5000/home', config);
                setTransactions(data);
                setTotal(() => calculateBalance(data));
            } catch(err) {
                console.log(err.response.data);
            }
        }
        getData();
    }, []);
    
    return (
    <IconContext.Provider value={{ color: "#fff", size: "24px" }}>
        <Container>
            <Header>
                <h2>Olá, {user.name}</h2>
                <RiLogoutBoxRLine />
            </Header>

            <Box>
                {transactions.length !== 0 ?
                <>
                    <ul>
                        {transactions.map((elem, i) =>
                            <Transaction key={i}>
                                <span>{elem.date}</span>
                                <div>
                                    <p>{elem.description}</p>
                                    <Value type={elem.type}>{elem.value.toFixed(2)}</Value>
                                </div>
                            </Transaction>)}
                    </ul>
                    <Balance>
                        <p>SALDO</p>
                        <Total total={total}>{total.toFixed(2)}</Total>
                    </Balance>
                </>
                : <Message>Não há registros de<br />entrada ou saída</Message>}
            </Box>

            <ButtonWrapper>
                <Button onClick={() => navigate('/new-income')}>
                    <AiOutlinePlusCircle />
                    <p>Nova<br />entrada</p>
                </Button>
                <Button onClick={() => navigate('/new-expense')}>
                    <AiOutlineMinusCircle />
                    <p>Nova<br />saída</p>
                </Button>
            </ButtonWrapper>
        </Container>
    </IconContext.Provider>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
`;

const Header = styled.header`
    width: 100%;
    height: 78px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-size: 26px;
        font-weight: 700;
        color: #fff;
    }
`;

const Box = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: #fff;
    padding: 20px 12px 10px;
    margin-bottom: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ul {
        width: 100%;
    }
`;

const Message = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 23.48px;
    color: #868686;
    margin: auto;
    text-align: center;
`;

const Transaction = styled.li`
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    color: #000;
    line-height: 18.78px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;

    span {
        color: #C6C6C6;
    }

    div {
        width: 80%;
        display: flex;
        justify-content: space-between;
    }
`;

const Value = styled.p`
    color: ${props => props.type === 'income' ? '#03AC00' : '#C70000'};
`;

const Balance = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    p {
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
        color: #000;
    }
`;

const Total = styled.span`
    color: ${props => props.total > 0 ? '#03AC00' : '#C70000'};
`;

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

const Button = styled.button`
    width: calc(50% - 8px);
    height: 114px;
    border: none;
    border-radius: 5px;
    padding: 10px;
    background-color: #A328D6;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;

    &:hover {
        cursor: pointer;
        filter: brightness(1.1);
    }
    
    p {
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
        align-self: flex-start;
        text-align: start;
    }
`;