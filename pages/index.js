import Link from 'next/link';
function home () {
    return <div>
        <h1>Página Principal foda</h1>
        <Link href="/sobre">
        <a>Acessar página sobre</a>
        </Link>
    </div>
}
export default home