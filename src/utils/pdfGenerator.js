import pdfMake from '../../node_modules/pdfmake/build/pdfmake.min.js';
import './libs/vfs_fonts';

import { pipe } from 'ramda';

/**
 * Generates an array with content of one price label
 * @param item
 */
const generateText = item => [{
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

/**
 * Generates an array of text labels
 * @param items
 */
const generateArray = items => items.reduce((res, item) => {
  res.push(generateText(item));
  return res;
}, []);

/**
 * Generates an array of array every three elements
 * @param list
 */
const generateArrayGroups = list => list
  .reduce((res, elem, i) => {
    if (i % 3 !== 0) {
      res[Math.floor(i / 3)].push([elem]);
    } else {
      res.push([elem]);
    }

    return res;
  }, []);

//* Generates a PDF file
const pdfGenerator = list => {
  let docDefinition = {
    content: [{
      table: {
        widths: [150, 150, 150]
      }
    }]
  };

  docDefinition.content[0].table.body = pipe(
    generateArray,
    generateArrayGroups
  )(list);

  return pdfMake.createPdf(docDefinition).open();
};

export default pdfGenerator;
