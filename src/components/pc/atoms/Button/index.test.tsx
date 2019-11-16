import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from './index';

describe('Button', () => {
    describe('スナップショットテスト', () => {
        describe('round', () => {
            it('true', () => {
                const tree = renderer.create(<Button round={true} />);
                expect(tree).toMatchSnapshot();
            });
        });
    });
});
