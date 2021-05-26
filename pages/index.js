import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
function home () {
    return <div>
        <head><title>Página Inicial</title></head>
        <h1>Página Inicial</h1>
        <Link href="/sobre">
        <a>Acessar página foda</a>
        </Link>
    </div>
    
}
export default home