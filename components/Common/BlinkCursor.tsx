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
};

const BlinkCursor: FC<BlinkCursorProps> = ({ component }) => {
    const Component = AnimatedComponent(component);
    return <Component>|</Component>
};

export default BlinkCursor;