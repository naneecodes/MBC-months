//book obj as arg and unit index number and lesson index number
//locate starting lesson in book.units[unitIndex].lessons[lessonIndex];
// const startingLesson = book.units[unitIndex].lessons[lessonIndex];

export function calculateRemainingLessons(book, [unitIndex, lessonIndex]) {
  const remainingLessons = [];
  let unitNumber = 0;
  let unitTitle = "";
  for (const [currentUnitIndex, unit] of book.units.entries()) {
    unitNumber = unit.unit;
    unitTitle = unit.title;
    if (unitNumber >= unitIndex) {
      for (const [currentLessonIndex, lesson] of unit.lessons.entries()) {
        if (currentLessonIndex >= lessonIndex || remainingLessons.length > 0) {
          const remainingLesson = { ...lesson };
          remainingLesson.unit = unitNumber;
          remainingLesson.unitTitle = unitTitle;
          if (lesson.studentBookPages && lesson.studentBookPages.length > 1) {
            remainingLesson.studentBookPages = convertToStringRange(
              lesson.studentBookPages
            );
          }
          if (lesson.workBookPages && lesson.workBookPages.length > 1) {
            remainingLesson.workBookPages = convertToStringRange(
              lesson.workBookPages
            );
          }
          remainingLessons.push(remainingLesson);
        }
      }
    }
  }
  return remainingLessons;
}

//
function convertToStringRange(pages) {
  const firstPage = pages[0].toString();
  const lastPage = pages[pages.length - 1].toString();
  return firstPage + "-" + lastPage;
}
