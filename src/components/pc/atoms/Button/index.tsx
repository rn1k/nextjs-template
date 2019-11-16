import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
    as?: any;
    round?: boolean;
    href?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
const Component = styled('a')<{
    round?: boolean;
}>`
    display: inline-block;
    padding: 8px 10px;
    margin: 0 auto;
    border-radius: 4px;
    box-sizing: border-box;
    background: #fff;
    text-align: center;
    text-decoration: none;
    border: solid 1px #888;
    ${props => {
        let styles = css``;
        if (props.round) {
            styles = css`
                padding: 8px 24px;
                border-radius: 24px;
            `;
        }
        return styles;
    }}
`;

const Button: React.FC<Props> = (props): React.ReactElement => {
    return (
        <>
            <Component
                onClick={props.onClick}
                round={props.round}
                href={props.href}
                as={props.as}
            >
                {props.children}
            </Component>
        </>
    );
};

export default Button;
