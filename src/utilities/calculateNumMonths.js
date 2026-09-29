export function calculateNumMonths(
  totalNumLessons,
  numClassesPerWeek,
  isAlternating
) {
  let numWeeksPerMonth = 0;
  isAlternating ? (numWeeksPerMonth = 2) : (numWeeksPerMonth = 4);
  return (
    Math.round((totalNumLessons / numClassesPerWeek / numWeeksPerMonth) * 100) /
    100
  );
}
