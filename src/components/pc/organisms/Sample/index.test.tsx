import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Sample from './';

describe('Sample', () => {
    describe('スナップショットテスト', () => {
        it('default', () => {
            const tree = renderer.create(
                <Sample isLoading={false} sendRequest={() => {}} />,
            );
            expect(tree).toMatchSnapshot();
        });
    });

    describe('round', () => {
        it('true', () => {
            const tree = renderer.create(
                <Sample
                    isLoading={false}
                    sendRequest={() => {}}
                    round={true}
                />,
            );
            expect(tree).toMatchSnapshot();
        });
    });
});
