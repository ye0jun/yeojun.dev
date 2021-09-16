import React, { FC } from "react";
import styled from 'styled-components';
import HeaderMenu from "./HeaderMenu";
import HeaderTitle from "./HeaderTitle";

const Container = styled.div`
    height: 600px;
    background: #f8f9fa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 23%;
    position: relative;
`;

const Header: FC = () => {
    return (
        <Container>
            <HeaderTitle />
            <HeaderMenu />
        </Container>
    );
}

export default Header;