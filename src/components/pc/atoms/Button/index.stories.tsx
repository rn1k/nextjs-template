import React from 'react';

import { storiesOf } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
// import { withKnobs, text, boolean } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';

import Button from './';

storiesOf('pc/atoms/Button', module)
    .add('Example', () => <Button>sample text</Button>)
    .add('round', () => <Button round={true}>primary</Button>);
