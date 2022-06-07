import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

function Header() {
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    }

    return (
        <S.HeaderWrapper>
            <S.HeaderInput 
                type="text"
                placeholder="Digite o usuário do GitHub aqui..."
                onChange={(event) => setUsernameForSearch(event.target.value)}
            />
            <S.HeaderButton
                type="submit"
                onClick={submitGetUser}
            >
                Buscar
            </S.HeaderButton>
        </S.HeaderWrapper>
    )
}

export default Header;