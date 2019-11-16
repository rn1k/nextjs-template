import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Icon from '~/components/sp/atoms/Icon';

interface Props {
    as?: any;
    round?: boolean;
    href?: string;
    text?: string;
    isLoading: boolean;
    sendRequest: (sampleData: string) => void;
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
    border: solid 1px #888;
    text-align: center;
    text-decoration: none;
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

const Sample: React.FC<Props> = ({
    isLoading,
    sendRequest,
    round,
    href,
    as,
    text,
}): React.ReactElement => {
    // react hooks
    const [count, setCount] = useState(0);

    // redux-hooks
    const valueFromReduxStore = isLoading ? (
        <div>Loading...</div>
    ) : (
        <div>{text}</div>
    );
    return (
        <>
            <Component
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    sendRequest('dummy')
                }
                round={round}
                href={href}
                as={as}
            >
                {valueFromReduxStore}
            </Component>
            <div onClick={() => setCount(count + 1)}>
                (React Hooks) ClickCount: {count}
            </div>
            <Icon width="30px" height="30px" />
        </>
    );
};

export default Sample;
