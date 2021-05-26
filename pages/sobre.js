import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Head from 'next/head';
function sobre () {
    return <div>
        <head><title>Página 2</title></head>
        <h1 className="primeiro">Henrique gostosa</h1>
        <Image src="/ameheart.png"
        width={100}
        height={100}
        /><br/>
        <Link href="/"><a>Voltar a página inicial</a></Link><br/>
    </div>
}
export default sobre