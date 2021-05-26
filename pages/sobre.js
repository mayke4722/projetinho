import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Head from 'next/head';
function sobre () {
    return <div>
        <head><title>Página 2</title></head>
        <h1><Link href="/">
        <a className="teste">Henrique gostosa</a>
        </Link> </h1>
        <Image src="/mori.gif"
        width={371}
        height={448}
        /><br/>
    </div>
}
export default sobre