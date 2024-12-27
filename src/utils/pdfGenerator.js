import pdfMake from '../../node_modules/pdfmake/build/pdfmake.min.js';
import './libs/vfs_fonts';

import { pipe } from 'ramda';

/**
 * Format number to Latin notation (dot as thousands separator, comma as decimal)
 * @param number
 * @returns {string}
 */
const formatNumber = number => {
  if (number === null || number === undefined) return '0';
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

/**
 * Generates an array with content of one price label
 * @param item
 * @param interest
 */
const generateText = item =>
  item.prices.reduce((res, elem, i) => {
    if (!elem || typeof elem.price === 'undefined') return res;

    if (i === 0) {
      const basePrice = {
        text: `Precio lista: $ ${formatNumber(elem.price)}`,
        alignment: 'center',
        fontSize: 11,
        color: '#666666',
        margin: [0, 0, 0, 5]
      };

      res.push(basePrice);
      return res;
    }

    if (i === 1) {
      const cashPrice = {
        stack: [
          {
            text: 'Precio efectivo',
            alignment: 'center',
            fontSize: 14,
            margin: [0, 0, 0, 2]
          },
          {
            text: `$ ${formatNumber(elem.price)}`,
            alignment: 'center',
            fontSize: 32,
            bold: true,
            margin: [0, 0, 0, 2]
          },
          {
            text: `${elem.cashDiscount || 0}% de descuento`,
            alignment: 'center',
            fontSize: 10,
            margin: [0, 0, 0, 5]
          },
          {
            canvas: [
              {
                type: 'line',
                x1: 15,
                y1: 0,
                x2: 135,
                y2: 0,
                lineWidth: 0.5,
                lineColor: '#CCCCCC'
              }
            ]
          }
        ],
        margin: [0, 0, 0, 10]
      };

      res.push(cashPrice);
      return res;
    }

    const credit = {
      stack: [
        {
          text: `${elem.instalments} cuotas de:`,
          alignment: 'center',
          fontSize: 11,
          margin: [0, 5, 0, 0]
        },
        {
          text: `$ ${formatNumber(elem.price)}`,
          alignment: 'center',
          fontSize: 14,
          bold: true,
          margin: [0, 2, 0, 2]
        },
        {
          text: `TASA DE INTERES ${elem.interest || 0}%`,
          alignment: 'center',
          fontSize: 8,
          color: '#666666',
          margin: [0, 0, 0, 10]
        }
      ]
    };

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
      default:
        list[list.length - 1].push();
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
