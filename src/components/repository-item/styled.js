import styled from "styled-components";

const RepositoryItemWrapper = styled.div`
    width: calc((100%/4) - 44px);
    height: 120px;
    padding: 10px 15px;
    margin: 5px;
    border: 1px solid #d9d9d9;
    border-radius: 7px;
    box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.5);
    position: relative;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;

    @media(max-width:1100px){
        width: calc(100%/3 - 44px);
    }

    @media(max-width:800px){
        width: calc(100%/2 - 44px);
    }
`;

const RepositoryItemTitle = styled.h3`
    font-size: 24px,
    font-weight: bold;
    margin: 0px;
`;

const RepositoryItemLink = styled.a`
    text-decoration: none;
    color: #226cc8;
    font-weight: bold;
    margin-top: 10px;
`;

export {
    RepositoryItemWrapper,
    RepositoryItemTitle,
    RepositoryItemLink
}