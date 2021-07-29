export const weekdayCalculator = (dateString) => {
  const array= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(dateString);
  return array[date.getDay()];
};