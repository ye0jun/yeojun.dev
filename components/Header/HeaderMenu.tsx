import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    position: absolute;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
`;

const Title = styled.span`
    font-size: 1.3rem;
    font-weight: 300;
`;

const MenuContainer = styled.div`
    display: flex;
    * + * {
        margin-left: 10px;
    }
`;

const Menu = styled.span`
    font-size: 1.3rem;
    font-weight: 700;
`;

const HeaderMenu: FC = () => {
    return <Container>
        <Title>yeojun.dev</Title>
        <MenuContainer>
            <Menu>Blog</Menu>
            <Menu>About</Menu>
        </MenuContainer>
    </Container>
}

export default HeaderMenu;