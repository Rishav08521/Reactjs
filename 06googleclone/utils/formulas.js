export const calculateFormula = (formula, cells) => {
    try {
      const result = math.evaluate(formula, cells);
      return result;
    } catch (err) {
      return 'Error';
    }
  };