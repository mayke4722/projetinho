import Link from 'next/link';
import Head from 'next/head';
function home () {
    return <div>
        <head><title>Página Inicial</title></head>
        <h1>Página Principal foda</h1>
        <Link href="/sobre">
        <a>Acessar página sobre</a>
        </Link>
    </div>
}
export default home