import styled from 'styled-components';

export default function Logo() {
    return (
        <Title>My Wallet</Title>
    );
}

const Title = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    text-align: center;
    color: #fff;
    margin-bottom: 28px;
`;