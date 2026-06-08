export function calc_bmi(weight: number, height: number) {
  // formula: BMI = W (kg) / H^2 (m)
  const bmi = (weight / height ** 2).toFixed(1);
  return parseFloat(bmi);
}


export function calc_estimated_burned_calories(
  time: number,
  met: number,
  weight: number,
) {
  // time in units of minutes
  // weight in unit of kg
  // formula: (T * MET * W) / 200
  return (time * met * weight) / 200;
}
