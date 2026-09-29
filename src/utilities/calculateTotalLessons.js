export function calculateTotalLessons(units, subject) {
  return units.reduce((total, unit) => total + unit.lessons.length, 0);
}
