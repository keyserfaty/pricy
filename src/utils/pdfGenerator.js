import pdfMake from '../../node_modules/pdfmake/build/pdfmake.min.js';
import './libs/vfs_fonts';

//* Generates a PDF file
const pdfGenerator = list => {
  let docDefinition = {
    content: [{
      table: {
        widths: [150, 150, 150],
        body: []
      }
    }]
  };

  const parseContent = items => items.reduce((res, item) => {
    const elem = [{
      text: `Contado: 
         $ ${item.price}
        `,
      alignment: 'center',
      fontSize: 18
    }, {
      text: `3 cuotas de: $ ${item.priceCard}`,
      alignment: 'center'
    }, {
      text: 'TASA DE INTERES 10%',
      fontSize: 9,
      alignment: 'center'
    }, {
      text: `
      12 cuotas de: $ ${item.priceCardInterest}
      con Ahora 12`,
      alignment: 'center'
    }, {
      text: 'TASA DE INTERES 20%',
      fontSize: 9,
      alignment: 'center'
    }];

    res.push(elem);
    return res;
  }, []);
  
  parseContent(list).map(item =>
    docDefinition.content[0].table.body.push(item)
  );

  console.log(JSON.stringify(docDefinition, null, 4))

  return pdfMake.createPdf(docDefinition).open();
};

export default pdfGenerator;
