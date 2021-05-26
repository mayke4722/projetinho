import Link from 'next/link';
import Head from 'next/head';
function home () {
    return <div>
        <head><title>Página Inicial</title></head>
        <Link href="/sobre">
        <a>Acessar página foda</a>
        </Link>
        <h1>Página Inicial</h1>
        <style jsx global>{`
  body {
    background: #EDC7B7};
  }
`}</style>
    </div>
    
}
export default home