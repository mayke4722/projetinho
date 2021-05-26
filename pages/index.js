import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
function home () {
    return <div>
        <head><title>Primeira página</title></head>
        <h1 className="teste"><a className="teste" href="/sobre">Paginazinha </a></h1>
        <Image className="astolfo"
        src="/tolfin.png"
        width={390}
        height={516}
        />
        <Link href="/sobre">
        <a>Ir para a segunda página</a>
        </Link>
    </div>
    
}
export default home