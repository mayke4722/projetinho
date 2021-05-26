import Link from 'next/link';
function home () {
    return <div>

        <h1>Página Principal foda</h1>
        <form>
            <label>Rique gostosa?</label>
            <input type="checkbox">sim</input>
            <input type="checkbox">sim</input>
        </form>

        <Link href="/sobre">
        <a>Acessar página sobre</a>
        </Link>
    </div>
}
export default home