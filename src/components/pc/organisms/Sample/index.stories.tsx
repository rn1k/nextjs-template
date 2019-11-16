import React from 'react';

import { storiesOf } from '@storybook/react';
// import { withInfo } from '@storybook/addon-info';
// import { withKnobs, text, boolean } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';

import Sample from '.';

storiesOf('pc/organisms/Sample', module)
    .add('Example', () => (
        <Sample isLoading={true} sendRequest={() => console.log('requested')} />
    ))
    .add('primary', () => (
        <Sample
            isLoading={false}
            sendRequest={() => console.log('requested')}
            text={'text after loading'}
        />
    ));
