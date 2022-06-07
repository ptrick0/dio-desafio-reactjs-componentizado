import styled from "styled-components";

const ProfileWrapper = styled.div`
    width: 100%;
    display: flex;
    margin: 20px 0px;

    @media(max-width:800px){
        flex-direction: column;
        align-items: center;
    }
`;

const RoundedImage = styled.img`
    border-radius: 50%;
    max-width: 300px;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.5);
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 10px;
`;

const InfoItemHeader = styled.h2`
    margin: 5px 10px;
    margin-top: 0px;
`;

const InfoItemWrapper = styled.div`
    display: flex;
`;

const InfoItemName = styled.p`
    width: 80px;
    font-weight: bold;
    margin: 3px 10px;
`;

const InfoItemData = styled.p`
    margin: 3px 10px;
`;

const StatusWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 10px;
    margin-top: auto;
`;

const StatusColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 10px 0px 10px;
    border-top: 1px solid #d5d5d5;
    margin-top: 10px;
`;

const StatusColumnTitle = styled.h4`
    margin: 0px;
`;

const StatusColumnNumber = styled.p`
    margin: 5px;
`;

export {
    ProfileWrapper,
    RoundedImage,
    InfoWrapper,
    InfoItemHeader,
    InfoItemWrapper,
    InfoItemName,
    InfoItemData,
    StatusWrapper,
    StatusColumn,
    StatusColumnTitle,
    StatusColumnNumber
}