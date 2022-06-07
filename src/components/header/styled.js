import styled from "styled-components";

const HeaderWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeaderInput = styled.input`
    width: 80%;
    height: 25px;
    border-radius: 7px;
    font-size: 16px;
    margin-right: 10px;
    border: 1px solid rgba(53,53,53,0.3);
    padding: 8px;
    transition: 0.4s ease-in-out 0.1s;

    &:hover, &:focus {
        box-shadow: 1px 1px 3px 0px rgba(53, 53, 53, 0.5);
        outline: none;
    }
`;

const HeaderButton = styled.button`
    width: 20%;
    height: 42px;
    background-color: #226cc8;
    box-shadow: 1px 1px 1px 1px #1c4d97;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: #3983dd;
        box-shadow: 1px 2px 1px 1px #1c4d97;
    }

    &:active {
        box-shadow: 1px 1px 1px 1px #1c4d97;
    }
`;

export {
    HeaderWrapper,
    HeaderInput,
    HeaderButton
}