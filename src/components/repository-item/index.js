import React from "react";
import * as S from "./styled";

function RepositoryItem(props) {
    const { repository } = props;

    return (
        <S.RepositoryItemWrapper>
            <S.RepositoryItemTitle>{repository.name}</S.RepositoryItemTitle>
            <S.RepositoryItemLink href={repository.html_url} target="_blank">{repository.full_name}</S.RepositoryItemLink>
        </S.RepositoryItemWrapper>
    )
}

export default RepositoryItem;