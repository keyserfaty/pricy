import JsBarcode from 'jsbarcode';

//* Takes an array of ids and returns barcodes images
const barcodesGenerator = list => {
  return list.map(barcode => {
    const canva = document.createElement('canvas');
    canva.setAttribute('id', 'barcode');
    
    JsBarcode(canva, barcode);
    
    return canva.toDataURL('image/png');
  })
};

export default barcodesGenerator;
