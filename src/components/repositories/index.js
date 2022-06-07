import React, { useEffect } from "react";
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

function Repositories() {

    const { githubState, getUserRepos } = useGithub();

    useEffect(() => {
        getUserRepos(githubState.user.login);
    }, [githubState.user.login]);

    const renderRepositories = () => {
        return (
            githubState.repositories.map((element, key) => {
                return <RepositoryItem 
                        key={`repository-${key}`}
                        repository={element}
                        />
            })
        )
    }

    return (
        <>
            <S.RepositoriesWrapper>
                {renderRepositories()}
            </S.RepositoriesWrapper>
        </>
    )
}

export default Repositories;