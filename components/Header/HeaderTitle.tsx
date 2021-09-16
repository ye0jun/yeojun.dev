import React, { FC } from "react";
import styled from 'styled-components';
import BlinkCursor from "../Common/BlinkCursor";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`;

const TitleContainer = styled.div`
    display: flex;
`;

const Title = styled.span`
    font-size: 3rem;
    font-weight: 700;
    & + & {
        margin-left: 1rem;
    }
`;

const BlueTitle = styled(Title)`
    background: #2e6eff;
    color: white;
`;

const SubTitle = styled.span`
    font-size: 2rem;
    font-weight: 300;
`;

const HeaderTitle: FC = () => {
    return (
        <Container>
            <TitleContainer>
                <Title>성장하는,</Title>
                <BlueTitle>함께하는,</BlueTitle>
                <Title>즐거운</Title>
            </TitleContainer>
            <SubTitle>개발자 진여준입니다.</SubTitle>
            <BlinkCursor component={SubTitle} text='|' />
        </Container>
    );
}

export default HeaderTitle;