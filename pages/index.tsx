import React from 'react';
import { NextPage } from 'next';
import PcPage from '~/components/pc/templates/SamplePage';
import SpPage from '~/components/sp/templates/SamplePage';

interface Props {
    device: string;
}

const IndexPage: NextPage<Props> = (props: Props) => {
    return props.device === 'pc' ? (
        <PcPage {...props} />
    ) : (
        <SpPage {...props} />
    );
};

export default IndexPage;
