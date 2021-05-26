import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
function home () {
    return <div>
        <head><title>Primeira página</title></head>
        <h1><Link href="/sobre">
        <a className="teste">Páginazinha</a>
        </Link> </h1>
        <Image className="astolfo"
        src="/tolfin.png"
        width={390}
        height={516}
        />
    </div>
    
}
export default home