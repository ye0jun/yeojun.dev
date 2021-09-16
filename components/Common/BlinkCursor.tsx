import { FC } from "react";
import styled, { AnyStyledComponent, keyframes } from 'styled-components'

function blinkEffect() {
    return keyframes`
      50% {
        opacity: 0;
      }
    `;
}

const AnimatedComponent = (component: AnyStyledComponent): AnyStyledComponent => {
    return (styled(component)`
        animation: ${blinkEffect} .8s linear infinite;
    `);
}

type BlinkCursorProps = {
    component: AnyStyledComponent;
    text: string;
};

const BlinkCursor: FC<BlinkCursorProps> = ({ component, text }) => {
    const Component = AnimatedComponent(component);
    return <Component>{text}</Component>
};

export default BlinkCursor;