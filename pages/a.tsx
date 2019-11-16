import React from 'react';
import Link from 'next/link';

export default () => (
    <div>
        <p>this is page /a</p>
        <Link href="/">
            <a>Link to index page</a>
        </Link>
    </div>
);
