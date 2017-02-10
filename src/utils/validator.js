export const validator = (conditions, formData) => {
  let invalid = false;
  conditions.forEach(condition => {
    if (condition === 'not-empty') {
      invalid = Object.keys(formData).filter(key =>
        formData[key].length === 0
      );
    }
  });

  if (invalid.length > 0) {
    return {
      error: '🚫 Los siguientes campos no están completos: ' + invalid.join().split(',').join(', ')
    }
  }

  return {
    res: 'No hay errores'
  }
};
