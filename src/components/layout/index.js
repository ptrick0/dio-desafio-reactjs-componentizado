import React from "react";
import * as S from './styled';
import Header from '../../components/header';

function Layout({ children }) {
    return (
        <S.LayoutWrapper>
            <Header />
            {children}
        </S.LayoutWrapper>
    )
}

export default Layout;