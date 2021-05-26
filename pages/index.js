import Link from 'next/link';
import Head from 'next/head';
function home () {
    return <div>
        <head><title>Página Inicial</title></head>
        <style jsx>{`
  h1 {
    font-size: 3rem;
    color: #FF0000;
  }
`}</style><h1>Página Inicial</h1>

        <Link href="/sobre">
        <a>Acessar página sobre</a>
        </Link>
    </div>
}
export default home