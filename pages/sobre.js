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
        <Image src="/ameheart.png"
        width={100}
        height={100}
        /><br/>
    </div>
}
export default sobre