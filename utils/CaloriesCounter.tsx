const CaloriesCounter = (
  protein: number,
  carbohydrates: number,
  fiber: number,
  fat: number,
  quantity: number = 100
): number => {
  return (
    Math.round(
      (protein * 4 + carbohydrates * 4 + fiber * 2 + fat * 9) * quantity  / 100
    )
  );
};

export default CaloriesCounter;
