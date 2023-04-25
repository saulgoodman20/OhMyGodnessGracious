import jsondata from './pliki_pdf.json'
import '../SCSS/index.scss'
import '../SCSS/pdf.scss'

export default function PDF() {
    const filteredItems = jsondata.filter((item) => item.available);
    return (
        <>
        <div className="wrapper">
            <p className="lista_p">Lista dostępnych plików pdf:</p>
            <ul>
            {
            filteredItems.length === 0 ? (
                <li className='px-5'>Brak plików PDF to wyświetlenia.</li>
            ) : (
            filteredItems.map((item, index) => (
                item.available ? (
                <li className="px-5 hover-styled" key={index}> {item.id}. {item.name}</li> ) : null
            )))}
            </ul>
        </div>
        </>
    );
}