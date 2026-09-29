import "./styles.css";
import * as books from "./books/index";
import { subjects } from "./constants";
import {
  calculateTotalLessons,
  calculateRemainingLessons,
  calculateNumMonths
} from "./utilities/index";

const appElement = document.getElementById("app");

appElement.innerHTML = `

<p id="greeting">Hello teacher! <i>I'm here to spark <b>joy</b>!</i>🌻<p>
<form id="form">
  <label>Subject: </label> 
  <select id="subject-menu">
    <option></option>
  </select>

  <br>
  <br>

  <label>Book: </label>
  <select id="book-menu">
    <option></option>
  </select>

  <br>
  <br>

  <label>Starting lesson: </label>
  <select id="lesson-menu">
    <option></option>
  </select>

  <br>
  <br>

  <label>Number of classes per week: </label>
  <input type="number" id="class-frequency-selector" name="class-frequency-selector"
       min="1" max="5"> </input>

  <br>
  <br>

  <label>Does this class alternate weekly? </label>
  <label>
  <input type="radio" name="choice-radio" id="choice-radio-Y">
  Yes
</label>
<label>
  <input type="radio" name="choice-radio" id="choice-radio-N">
  No
</label>

<br>
<br>




  <input type="submit" value="ABRACADABRA 🎩"> </input>

</form>


`;

//form state
const formState = {
  subject: "",
  bookTitle: "",
  book: null,
  units: [],
  startingLesson: null
};

//html elements
const subjectMenu = document.getElementById("subject-menu");
const bookMenu = document.getElementById("book-menu");
const lessonMenu = document.getElementById("lesson-menu");
const form = document.getElementById("form");
const greeting = document.getElementById("greeting");
const classFrequency = document.getElementById("class-frequency-selector");

//functions
function populateSubjectMenu() {
  const subjectList = Object.values(subjects);
  for (const subject of subjectList) {
    const subjectOption = document.createElement("option");
    subjectOption.textContent = subject;
    subjectMenu.appendChild(subjectOption);
  }
}

function populateLessonTitles(book) {
  let unitNumber = 0;
  for (const [unitIndex, unit] of book.units.entries()) {
    unitNumber = unit.unit;
    for (const [lessonIndex, lesson] of unit.lessons.entries()) {
      let lessonValue = unitNumber + "-" + lessonIndex;
      const lessonOption = document.createElement("option");
      lessonOption.setAttribute("value", lessonValue);
      lessonOption.textContent = "Unit " + unitNumber + ": " + lesson.title;
      lessonMenu.appendChild(lessonOption);
    }
  }
}

// populate book menu
function onSubjectSelectedChange(event) {
  formState.subject = event.target.value;
  formState.bookTitle = "";
  formState.book = null;
  formState.startingLesson = null;
  removeChildren(bookMenu);
  removeChildren(lessonMenu);

  const blankOption = document.createElement("option");
  bookMenu.appendChild(blankOption);
  for (const book of Object.values(books).filter(
    (book) => book.subject === formState.subject
  )) {
    const titleOption = document.createElement("option");

    titleOption.textContent = book.title;
    bookMenu.appendChild(titleOption);
  }
}

function onBookSelectedChange(event) {
  formState.bookTitle = event.target.value;
  formState.book = null;
  formState.startingLesson = null;
  removeChildren(lessonMenu);

  const selectedBook = Object.values(books).find(
    (book) => book.title === formState.bookTitle
  );
  if (selectedBook) {
    populateLessonTitles(selectedBook);
    parseIndicesAndSetState("0-0");
    formState.book = selectedBook;
    formState.units = selectedBook.units;
  } else {
    alert(`Can't find book data for ${formState.bookTitle}, 👻`);
  }
}

function onLessonSelectedChange(event) {
  parseIndicesAndSetState(event.target.value);
}

function removeChildren(parent) {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.lastChild);
  }
}

function parseIndicesAndSetState(unitLessonIndicesString) {
  let unitLessonIndices = unitLessonIndicesString.split("-");
  for (let i = 0; i < unitLessonIndices.length; i++) {
    unitLessonIndices[i] = parseInt(unitLessonIndices[i]);
  }
  formState.startingLesson = unitLessonIndices;
}

function formHandler(event) {
  event.preventDefault();
  //validate form
  //hide form
  form.style.display = "none";
  greeting.style.display = "none";

  //calculate total number lessons
  const totalNumLessons = calculateTotalLessons(formState.units);

  //calculate number of months to finish book
  const numClassesPerWeek = classFrequency.value;

  //get value of isAlternating
  let isAlternating = false;
  document.getElementById("choice-radio-Y").checked
    ? (isAlternating = true)
    : (isAlternating = false);

  const monthsToFinish = calculateNumMonths(
    totalNumLessons,
    numClassesPerWeek,
    isAlternating
  );

  //display total number lessons
  const results = document.createElement("div");
  results.setAttribute("class", "results-div");
  appElement.appendChild(results);

  const totalDiv = document.createElement("div");
  totalDiv.setAttribute("id", "total-div");
  totalDiv.setAttribute("class", "total-div");
  totalDiv.textContent = "Total Number of Lessons: " + totalNumLessons;
  results.appendChild(totalDiv);

  const monthsDiv = document.createElement("div");
  monthsDiv.setAttribute("class", "months-div");
  monthsDiv.textContent = "Months Remaining: " + monthsToFinish;
  results.appendChild(monthsDiv);

  //calculate remaining number lessons
  const remainingLessons = calculateRemainingLessons(
    formState.book,
    formState.startingLesson
  );

  //REMINDER TO CREATE BOOK ORDER REMINDER IF < X NUM LESSONS
  const numRemainingLessons = remainingLessons.length;
  const percentRemainingLessons = Math.round(
    (numRemainingLessons / totalNumLessons) * 100
  );

  //display remaining lessons
  const lessonsDiv = document.createElement("div");
  lessonsDiv.setAttribute("id", "lessons-div");
  lessonsDiv.setAttribute("class", "lessons-div");
  results.appendChild(lessonsDiv);

  const remainingNumberContainer = document.createElement("p");
  remainingNumberContainer.setAttribute("id", "remaining-numbers");
  remainingNumberContainer.setAttribute("class", "remaining-numbers");
  remainingNumberContainer.textContent =
    "Remaining Lessons: " +
    numRemainingLessons +
    " out of " +
    totalNumLessons +
    " (" +
    percentRemainingLessons +
    "%)";
  lessonsDiv.appendChild(remainingNumberContainer);

  //pop up reminder- UPDATE LATER
  function reminder(percentRemainingLessons) {
    let orderReminder = null;
    if (percentRemainingLessons < 20) {
      orderReminder = document.createElement("p");
      orderReminder.setAttribute(
        "style",
        "margin-bottom: 20px; font-style: italic; font-weight: bold"
      );

      orderReminder.textContent =
        "Whoa, you're almost finished! Did you order books yet? ⚡";
    }
    return orderReminder;
  }

  if (reminder(percentRemainingLessons)) {
    const orderReminder = reminder(percentRemainingLessons);
    lessonsDiv.appendChild(orderReminder);
  }

  //display book title
  const bookHeader = document.createElement("p");
  bookHeader.setAttribute("id", "book-header");
  bookHeader.setAttribute("class", "book-header");
  bookHeader.textContent = formState.bookTitle;
  lessonsDiv.appendChild(bookHeader);

  //create remaining lessons table

  // const lessonTable = document.createElement("table");
  // lessonTable.setAttribute("id", "lesson-table");
  // lessonTable.setAttribute("class", "lesson-table");

  // const lessonTableBody = document.createElement("tbody");

  // for (const [lessonIndex, lesson] of Object.entries(remainingLessons)) {
  //   const lessonNum = parseInt(lessonIndex) + 1;
  //   const lessonNumRow = document.createElement("tr");
  //   lessonNumRow.setAttribute("id", "lesson-num-row");
  //   lessonTableBody.appendChild(lessonNumRow);
  //   const lessonNumTitle = document.createElement("td");
  //   lessonNumTitle.setAttribute("id", "lesson-" + lessonNum);
  //   lessonNumRow.appendChild(lessonNumTitle);
  // }

  // lessonTable.appendChild(lessonTableBody);
  // lessonsDiv.appendChild(lessonTable);

  //display remaining lessons list
  for (const [lessonIndex, lesson] of Object.entries(remainingLessons)) {
    const lessonNumber = parseInt(lessonIndex) + 1;
    const lessonDiv = document.createElement("div");
    lessonDiv.setAttribute("id", "lesson-div" + lessonNumber);
    lessonDiv.setAttribute("class", "lesson-div");
    lessonsDiv.appendChild(lessonDiv);

    const lessonNum = document.createElement("p");
    lessonNum.setAttribute("id", "lesson-num");
    lessonNum.setAttribute("class", "lesson-num");
    lessonNum.setAttribute("style", "font-style: italic");

    lessonNum.textContent = "Lesson " + lessonNumber;
    lessonDiv.appendChild(lessonNum);

    if (lesson.unitTitle) {
      const unitTitle = document.createElement("li");
      unitTitle.setAttribute("id", "unit-title");
      unitTitle.setAttribute("class", "unit-title");
      //PHONICS, VIDEO, ETC.
      if (lesson.unitTitle.includes("EXTRA")) {
        unitTitle.textContent = lesson.unitTitle.toUpperCase();
      } else {
        unitTitle.textContent =
          "U" + lesson.unit + ". " + lesson.unitTitle.toUpperCase();
      }

      lessonDiv.appendChild(unitTitle);
    }

    const lessonTitle = document.createElement("li");
    lessonTitle.setAttribute("id", "lesson-title");
    lessonTitle.setAttribute("class", "lesson-title");
    lessonTitle.textContent = lesson.title;
    lessonDiv.appendChild(lessonTitle);

    if (lesson.studentBookPages) {
      const lessonSB = document.createElement("li");
      lessonSB.setAttribute("id", "lesson-sb");
      lessonSB.setAttribute("class", "lesson-sb");
      lessonSB.textContent = "[SB] P" + lesson.studentBookPages + ".";
      lessonDiv.appendChild(lessonSB);
    }

    if (lesson.workBookPages) {
      const lessonWB = document.createElement("li");
      lessonWB.setAttribute("id", "lesson-wb");
      lessonWB.setAttribute("class", "lesson-wb");
      lessonWB.textContent = "[WB] P" + lesson.workBookPages + ".";
      lessonDiv.appendChild(lessonWB);
    }
  }
}

//event listeners
subjectMenu.addEventListener("change", onSubjectSelectedChange);
bookMenu.addEventListener("change", onBookSelectedChange);
lessonMenu.addEventListener("change", onLessonSelectedChange);

form.addEventListener("submit", formHandler);

populateSubjectMenu();
