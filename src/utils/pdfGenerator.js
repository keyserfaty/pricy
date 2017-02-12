import pdfMake from '../../node_modules/pdfmake/build/pdfmake.min.js';
import './libs/vfs_fonts';

import { pipe } from 'ramda';

/**
 * Generates an array with content of one price label
 * @param item
 * @param interest
 */
const generateText = (item, interest) => [{
  text: `Contado: 
         $ ${item.price}
        `,
  alignment: 'center',
  fontSize: 18
}, {
  text: `3 cuotas de: $ ${item.priceCard}`,
  alignment: 'center'
}, {
  text: `TASA DE INTERES ${interest.due3}%`,
  fontSize: 9,
  alignment: 'center'
}, {
  text: `
      12 cuotas de: $ ${item.priceCardInterest}
      con Ahora 12`,
  alignment: 'center'
}, {
  text: `TASA DE INTERES ${interest.due12}%`,
  fontSize: 9,
  alignment: 'center'
}];

/**
 * Generates an array of text labels
 * @param interest
 * @param list
 */
const generateArray = interest => list => list.reduce((res, item) => {
  res.push(generateText(item, interest));
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

/**
 * Add empty spaces if list is not full
 * @param list
 * @returns {*}
 */
const generateEmptySpaces = list => {
  if (list[list.length - 1].length < 3) {
    switch (list[list.length - 1].length) {
      case 1:
        list[list.length - 1].push([], []);
        break;
      case 2:
        list[list.length - 1].push([]);
        break;
    }
  }
  return list;
};

//* Generates a PDF file
const pdfGenerator = (list, interest) => {
  let docDefinition = {
    content: [{
      table: {
        widths: [150, 150, 150]
      }
    }]
  };

  docDefinition.content[0].table.body = pipe(
    generateArray(interest),
    generateArrayGroups,
    generateEmptySpaces
  )(list);

  return pdfMake.createPdf(docDefinition).open();
};

export default pdfGenerator;
