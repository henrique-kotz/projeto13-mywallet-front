import styled from 'styled-components';

const SubmitButton = styled.button`
    width: 326px;
    height: 46px;
    background-color: #A328D6;
    border: none;
    border-radius: 5px;

    color: #fff;
    font-size: 20px;
    font-weight: 700;

    &:hover {
        cursor: pointer;
        filter: brightness(1.1);
    }
`;

export default SubmitButton;