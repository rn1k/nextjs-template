import React from 'react';
import styled, { css } from 'styled-components';
import icon from './icon.png';

interface Props {
    width: string;
    height: string;
}
const Component = styled.div`
    display: inline-block;
    padding-right: 4px;
`;

const Icon: React.FunctionComponent<Props> = (props): React.ReactElement => {
    return (
        <Component>
            <img src={icon} alt="" {...props} />
        </Component>
    );
};

export default Icon;
