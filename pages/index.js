import Link from 'next/link';
import Head from 'next/head';
function home () {
    return <div>
        <head><title>Página Inicial</title></head>
        <h1>Página Inicial</h1>
        <Link href="/sobre">
        <a>Acessar página sobre</a>
        </Link>
        <style jsx global>{`
  body {
    background: #FF0000};
  }
`}</style>
    </div>
    
}
export default home