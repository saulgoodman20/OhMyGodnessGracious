import jsondata from './pliki_pdf.json';
import '../SCSS/index.scss';
import '../SCSS/pdf.scss';

import pdfs from './pdf/pdfsContext';

export default function PDF() {
  const filteredItems = (jsondata as Item[]).filter((item) => item.available);

  const getAlphabeticValue = (index: number) => {
    return String.fromCharCode(65 + index);
  };

  interface Child {
    id: string;
    name: string;
    desc: string;
    available: boolean;
  }
  
  interface Item {
    id: string;
    name: string;
    desc: string;
    available: boolean;
    children: Child[];
  }

  const alertPDFList = (e: any) => {
    const parentID = e.currentTarget.getAttribute('data-parent-id');
    const childID = e.currentTarget.getAttribute('data-child-id');
  
    if (parentID) {
      pdfs.map((pdfArray, index) => {
        if (index === parseInt(parentID)-1) {
          if (childID) {
            openPDF(pdfArray, parseInt(childID));
          } else if (typeof pdfArray[0] === 'string') {
            window.open(pdfArray[0], '_blank');
          }
        }
      });
    }
  };
  
  const openPDF = (pdfArray: any[], childID: number) => {
    if (childID < pdfArray.length) {
      window.open(pdfArray[childID], '_blank');
    }
  };
  
  const parseDescription = (desc: string) => {
    return desc.split('*').map((part, index) => 
      index % 2 === 0 ? <span key={index}>{part}</span> : <span className='smaller' key={index}>{part}</span>
    );
  };
  

  return (
    <>
      <div className="wrapper">
        <p className="lista_p">Lista dostępnych plików pdf <span className='text-xs text-teal-700'>(naciśnij na blok, aby pobrać)</span>:</p>
        <ul>
          {filteredItems.length === 0 ? (
            <li className="px-5">Brak plików PDF do wyświetlenia.</li>
          ) : (
            filteredItems.map((item, index) => (
              <li className="px-5 hover-styled" data-parent-id={item.id} key={index} onClick={alertPDFList}>
                <b>{item.id}. {item.name}</b>: {parseDescription(item.desc)}
                {item.children && item.children.length > 0 ? (
                  <ul>
                    {item.children.map((child, childIndex) => {
                      if (child.available && typeof child.name === 'string') {
                        return (
                          <li
                            className='px-5 children'
                            data-parent-id={item.id}
                            data-child-id={childIndex + 1}
                            key={child.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              alertPDFList(e);
                            }}
                          >
                            <b key={child.id}>{getAlphabeticValue(parseInt(child.id) - 1)}. {child.name}</b>: {parseDescription(child.desc)}
                          </li>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </ul>
                ) : null}
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}
