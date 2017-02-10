import pdfMake from '../../node_modules/pdfmake/build/pdfmake.min.js';
import barcodesGenerator from './barcodeGenerator';
import './libs/vfs_fonts';

//* Generates a PDF file with the barcodes images
const pdfGenerator = list => {
  let docDefinition = {
    content: []
  };

  barcodesGenerator(list).map(image =>
    docDefinition.content.push({ image })
  );

  return pdfMake.createPdf(docDefinition).open();
};

export default pdfGenerator;
