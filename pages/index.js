import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
function home () {
    return <div>
        <head><title>Página Inicial</title></head>
        <h1 className="teste">Página Inicial</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/L9r-NxuYszg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/>
        <Link href="/sobre">
        <a>Acessar página sobre</a>
        </Link>
    </div>
    
}
export default home