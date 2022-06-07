import React, { Fragment } from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

function Profile() {
    const { githubState } = useGithub();

    const renderUserInfo = () => {
        return (
            <>
                <S.InfoItemHeader>{githubState.user.name}</S.InfoItemHeader>
                <S.InfoItemWrapper>
                    <S.InfoItemName>Username: </S.InfoItemName>
                    <S.InfoItemData>{githubState.user.login}</S.InfoItemData>
                </S.InfoItemWrapper>
                <S.InfoItemWrapper>
                    <S.InfoItemName>Company: </S.InfoItemName>
                    <S.InfoItemData>{githubState.user.company ? githubState.user.company : "-"}</S.InfoItemData>
                </S.InfoItemWrapper>
                <S.InfoItemWrapper>
                    <S.InfoItemName>Location: </S.InfoItemName>
                    <S.InfoItemData>{githubState.user.location ? githubState.user.location : "-"}</S.InfoItemData>
                </S.InfoItemWrapper>
                <S.InfoItemWrapper>
                    <S.InfoItemName>Site: </S.InfoItemName>
                    <S.InfoItemData>{githubState.user.blog ? githubState.user.blog : "-"}</S.InfoItemData>
                </S.InfoItemWrapper>
            </>
        )
    }

    const renderStatus = () => {
        return (
            <>
                <S.StatusColumn>
                    <S.StatusColumnTitle>Followers</S.StatusColumnTitle>
                    <S.StatusColumnNumber>{githubState.user.followers}</S.StatusColumnNumber>
                </S.StatusColumn>
                <S.StatusColumn>
                    <S.StatusColumnTitle>Following</S.StatusColumnTitle>
                    <S.StatusColumnNumber>{githubState.user.following}</S.StatusColumnNumber>
                </S.StatusColumn>
                <S.StatusColumn>
                    <S.StatusColumnTitle>Gists</S.StatusColumnTitle>
                    <S.StatusColumnNumber>{githubState.user.public_gists}</S.StatusColumnNumber>
                </S.StatusColumn>
                <S.StatusColumn>
                    <S.StatusColumnTitle>Repos</S.StatusColumnTitle>
                    <S.StatusColumnNumber>{githubState.user.public_repos}</S.StatusColumnNumber>
                </S.StatusColumn>
            </>
        )
    }

    return (
        <S.ProfileWrapper>
            <S.RoundedImage src={githubState.user.avatar} alt="User Avatar"></S.RoundedImage>
            <S.InfoWrapper>
                {renderUserInfo()}
                <S.StatusWrapper>
                    {renderStatus()}
                </S.StatusWrapper>
            </S.InfoWrapper>
        </S.ProfileWrapper>
    )
}

export default Profile;