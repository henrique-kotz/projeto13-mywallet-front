import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';

export default function HomePage() {
    return (
    <IconContext.Provider value={{ color: "#fff", size: "24px" }}>
        <Container>
            <Header>
                <h2>Olá, fulano</h2>
                <RiLogoutBoxRLine />
            </Header>

            <Box>
                <p>Não há registros de<br />entrada ou saída</p>
            </Box>

            <ButtonWrapper>
                <Button>
                    <AiOutlinePlusCircle />
                    <p>Nova<br />entrada</p>
                </Button>
                <Button>
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
    padding: 20px 12px 0;
    margin-bottom: 14px;
    display: flex;

    p {
        font-size: 20px;
        font-weight: 400;
        line-height: 23.48px;
        color: #868686;
        margin: auto;
        text-align: center;
    }
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
    
    p {
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
        align-self: flex-start;
        text-align: start;
    }
`;