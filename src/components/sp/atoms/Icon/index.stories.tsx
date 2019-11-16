import React from 'react';

import { storiesOf } from '@storybook/react';

import Icon from '.';

storiesOf('sp/atoms/Icon', module)
    .add('40px x 40px', () => <Icon width="40px" height="40px" />)
    .add('80px x 80px', () => <Icon width="80px" height="80px" />);
