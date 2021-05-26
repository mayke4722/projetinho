import Link from 'next/link';
import Image from 'next/image';
function sobre () {
    return <div>
        <Image src="/kkkgostosa.png" width={50} height={50}/>
        <form>
            <label><h1>ash gostosa?</h1></label>
            <input type="checkbox"/>sim<br/>
            <input type="checkbox"/>com certeza<br/>
        </form>
        <Link href="/"><a>Voltar a página inicial</a></Link><br/>
        <style jsx global>{`
  body {
    background: #EDC7B7};
  }
`}</style>
    </div>
}
export default sobre