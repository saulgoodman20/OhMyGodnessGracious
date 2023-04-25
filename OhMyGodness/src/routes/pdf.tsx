import jsondata from './pliki_pdf.json'
import '../SCSS/index.scss'
import '../SCSS/pdf.scss'

export default function PDF() {
    return (
        <>
        <div className="wrapper">
            <p className="lista_p">Lista dostępnych plików pdf:</p>
            <ul>
            {jsondata.map((item, index) => (
                <li className="px-5" key={index}> {item.id}. {item.name}</li>
            ))}
            </ul>
        </div>
        </>
    );
}