import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
function home () {
    return <div>
        <head><title>Página Inicial</title></head>
        <h1 className="teste">Página Inicial</h1>
        <Image className="floatRight"
        src="/tolfin.png"
        width={390}
        height={516}
        />
        <Link href="/sobre">
        <a>Acessar página sobre</a>
        </Link>
    </div>
    
}
export default home