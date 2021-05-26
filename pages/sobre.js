import Link from 'next/link';
function sobre () {
    return <div>
        <Link href="/"><a>Voltar a página inicial</a></Link>
        <form>
            <label>Rique gostosa?</label>
            <input type="checkbox"/>sim<br/>
            <input type="checkbox"/>com certeza<br/>
        </form>
        <style jsx global>{`
  body {
    background: #EDC7B7};
  }
`}</style>
    </div>
}
export default sobre