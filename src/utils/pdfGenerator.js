import pdfMake from '../../node_modules/pdfmake/build/pdfmake.min.js';
import './libs/vfs_fonts';

//* Generates a PDF file with the barcodes images
const pdfGenerator = list => {
  let docDefinition = {
    content: []
  };

  // TODO: this needs some work on styles
  const parseContent = items => items.reduce((res, item) => {
    const elem = {
      text: `
       Contado: 
       $ ${item.price}
       
       3 cuotas de: $ ${item.priceCard}
       TASA DE INTERES 10%
       
       12 cuotas de: $ ${item.priceCardInterest}
       con Ahora 12
       TASA DE INTERES 20%
      `
    };

    res.push(elem);
    return res;
  }, []);

  parseContent(list).map(item =>
    docDefinition.content.push(item)
  );


  return pdfMake.createPdf(docDefinition).open();
};

export default pdfGenerator;
