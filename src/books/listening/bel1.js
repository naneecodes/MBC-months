//Bricks Easy 100 L1
import { subjects } from "../../constants";
import { calculateTotalLessons } from "../../utilities/calculateTotalLessons";

export const title = "Bricks Easy 100 L1";
export const subject = subjects.LISTENING;
export const units = [
  {
    unit: 1,
    title: "First Day",
    lessons: [
      {
        title: "Getting Started & Check Up",
        studentBookPages: [6, 7],
        workBookPages: [4, 5]
      },

      {
        title: "Listen Up 1 & 2",
        studentBookPages: [8, 9],
        workBookPages: [6, 7]
      },

      {
        title: "Skills Up & Unit Test",
        studentBookPages: [10, 11]
      }
    ]
  },
  {
    unit: 2,
    title: "Colors and Shapes",
    lessons: [
      {
        title: "Getting Started & Check Up",
        studentBookPages: [12, 13],
        workBookPages: [8, 9]
      },
      {
        title: "Listen Up 1 & 2",
        studentBookPages: [14, 15],
        workBookPages: [10, 11]
      },

      {
        title: "Skills Up & Unit Test",
        studentBookPages: [16, 17]
      }
    ]
  },
  {
    unit: 3,
    title: "My Family",
    lessons: [
      {
        title: "Getting Started & Check Up",
        studentBookPages: [18, 19],
        workBookPages: [12, 13]
      },

      {
        title: "Listen Up 1 & 2",
        studentBookPages: [20, 21],
        workBookPages: [14, 15]
      },

      {
        title: "Skills Up & Unit Test",
        studentBookPages: [22, 23]
      }
    ]
  },
  {
    unit: 4,
    title: "Animal Friends",
    lessons: [
      {
        title: "Getting Started & Check Up",
        studentBookPages: [24, 25],
        workBookPages: [16, 17]
      },

      {
        title: "Listen Up 1 & 2",
        studentBookPages: [26, 27],
        workBookPages: [18, 19]
      },

      {
        title: "Skills Up & Unit Test",
        studentBookPages: [28, 29]
      }
    ]
  },
  {
    unit: 5,
    title: "My Body",
    lessons: [
      {
        title: "Getting Started & Check Up",
        studentBookPages: [30, 31],
        workBookPages: [20, 21]
      },

      {
        title: "Listen Up 1 & 2",
        studentBookPages: [32, 33],
        workBookPages: [22, 23]
      },

      {
        title: "Skills Up & Unit Test",
        studentBookPages: [34, 35]
      },
      {
        title: "Review Test 1 (Units 1-4)",
        studentBookPages: [78, 79]
      }
    ]
  },
  {
    unit: 6,
    title: "Things to Do",
    lessons: [
      {
        title: "Getting Started & Check Up",
        studentBookPages: [36, 37],
        workBookPages: [24, 25]
      },

      {
        title: "Listen Up 1 & 2",
        studentBookPages: [38, 39],
        workBookPages: [26, 27]
      },

      {
        title: "Skills Up & Unit Test",
        studentBookPages: [40, 41]
      }
    ]
  },
  {
    unit: 7,
    title: "Things to Wear",
    lessons: [
      {
        title: "Getting Started & Check Up",
        studentBookPages: [42, 43],
        workBookPages: [28, 29]
      },

      {
        title: "Listen Up 1 & 2",
        studentBookPages: [44, 45],
        workBookPages: [30, 31]
      },

      {
        title: "Skills Up & Unit Test",
        studentBookPages: [46, 47]
      }
    ]
  },
  {
    unit: 8,
    title: "Music",
    lessons: [
      {
        title: "Getting Started & Check Up",
        studentBookPages: [48, 49],
        workBookPages: [32, 33]
      },

      {
        title: "Listen Up 1 & 2",
        studentBookPages: [50, 51],
        workBookPages: [34, 35]
      },

      {
        title: "Skills Up & Unit Test",
        studentBookPages: [52]
      },
      {
        title: "Review Test 2 (Units 5-8)",
        studentBookPages: [80, 81]
      }
    ]
  },
  {
    unit: 9,
    title: "My Week",
    lessons: [
      {
        title: "Getting Started & Check Up",
        studentBookPages: [54, 55],
        workBookPages: [36, 37]
      },

      {
        title: "Listen Up 1 & 2",
        studentBookPages: [56, 57],
        workBookPages: [38, 39]
      },

      {
        title: "Skills Up & Unit Test",
        studentBookPages: [58, 59]
      }
    ]
  },
  {
    unit: 10,
    title: "At School",
    lessons: [
      {
        title: "Getting Started & Check Up",
        studentBookPages: [60, 61],
        workBookPages: [40, 41]
      },

      {
        title: "Listen Up 1 & 2",
        studentBookPages: [62, 63],
        workBookPages: [42, 43]
      },

      {
        title: "Skills Up & Unit Test",
        studentBookPages: [64, 65]
      }
    ]
  },
  {
    unit: 11,
    title: "Weather",
    lessons: [
      {
        title: "Getting Started & Check Up",
        studentBookPages: [66, 67],
        workBookPages: [44, 45]
      },

      {
        title: "Listen Up 1 & 2",
        studentBookPages: [68, 69],
        workBookPages: [46, 47]
      },

      {
        title: "Skills Up & Unit Test",
        studentBookPages: [70, 71]
      }
    ]
  },
  {
    unit: 12,
    title: "Dates",
    lessons: [
      {
        title: "Getting Started & Check Up",
        studentBookPages: [72, 73],
        workBookPages: [48, 49]
      },

      {
        title: "Listen Up 1 & 2",
        studentBookPages: [74, 75],
        workBookPages: [50, 51]
      },

      {
        title: "Skills Up & Unit Test",
        studentBookPages: [76, 77]
      },
      {
        title: "Review Test 3 (Units 9-12)",
        studentBookPages: [82, 83]
      }
    ]
  }
];

export const totalNumLessons = calculateTotalLessons(units);
