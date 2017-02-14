import pdfMake from '../../node_modules/pdfmake/build/pdfmake.min.js';
import './libs/vfs_fonts';

import { pipe } from 'ramda';

/**
 * Generates an array with content of one price label
 * @param item
 * @param interest
 */
const generateText = item =>
  item.prices.reduce((res, elem, i) => {
    if (i === 0) {
      const cash = {
        text: `Contado: 
         $ ${elem.price}`,
        alignment: 'center',
        fontSize: 18
      };

      res.push(cash);
      return res;
    }

    const credit = [
      {
        text: `
        ${elem.instalments} cuotas de: $ ${elem.price} ${elem.instalments === 12 ? `\n con Ahora 12` : ``}`,
        alignment: 'center'
      }, {
        text: `TASA DE INTERES ${elem.interest}%`,
        fontSize: 9,
        alignment: 'center'
      }
    ];

    res.push(credit);
    return res;
  }, []);

/**
 * Generates an array of text labels
 * @param interest
 * @param list
 */
const generateArray = list => list.reduce((res, item) => {
  res.push(generateText(item));
  return res;
}, []);

/**
 * Generates an array of arrays every three elements
 * to generate the table cells
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
 * Add empty spaces to array if list is not full
 * so that table has at least 3 cells for every row
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
    generateArrayGroups,
    generateEmptySpaces
  )(list);

  return pdfMake.createPdf(docDefinition).open();
};

export default pdfGenerator;
