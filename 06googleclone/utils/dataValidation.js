export const validateCellData = (value, type) => {
    if (type === 'number') {
      return !isNaN(value);
    }
    return true;
  };
  