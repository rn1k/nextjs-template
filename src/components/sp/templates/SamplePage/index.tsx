import React from 'react';
import SampleContainer from '~/containers/SampleContainer';
import Link from 'next/link';

interface Props {
    device: string;
}

const SamplePage: React.FC<Props> = props => {
    return (
        <ul>
            <li>
                <SampleContainer href="#" text="smartphone page" />
            </li>
            <li>
                <span>this page is for {props.device}</span>
            </li>
            <li>
                <Link href="/a" as="/a">
                    <a>Link to page A</a>
                </Link>
            </li>
            <li>
                <Link href="/b" as="/b">
                    <a>b</a>
                </Link>
            </li>
        </ul>
    );
};

export default SamplePage;
