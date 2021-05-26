import Link from 'next/link';
function sobre () {
    return <div>
        <h1>Sobre</h1>
        <Link href="/"><a>Página principal</a></Link>
            <Link href="/teste"><a>Página html</a></Link>
    </div>
}
export default sobre