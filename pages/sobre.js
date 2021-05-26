import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Head from 'next/head';
function sobre () {
    return <div>
        <head><title>Sobre</title></head>
        <h1 className="primeiro">Página Sobre</h1>
        <Link href="/"><a>Voltar a página inicial</a></Link><br/>
    </div>
}
export default sobre