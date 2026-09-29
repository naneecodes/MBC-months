//Bricks Beginner 150 L1
import { subjects } from "../../constants";
import { calculateTotalLessons } from "../../utilities/calculateTotalLessons";

export const title = "Bricks Beginner 150 L1";
export const subject = subjects.LISTENING;
export const units = [
  {
    unit: 1,
    title: "Feelings",
    lessons: [
      {
        title: "Getting Started, Look Up & Check Up (WORD TEST)",
        studentBookPages: [6],
        workBookPages: [4, 5]
      },
      {
        title: "Topic 1: Guess My Feeling",
        studentBookPages: [7],
        workBookPages: [6, 7, 8]
      },
      {
        title: "Topic 2: Happy With My Puppy",
        studentBookPages: [8],
        workBookPages: [8, 9]
      },
      {
        title: "Unit Test",
        studentBookPages: [10, 11]
      }
    ]
  },
  {
    unit: 2,
    title: "People in Town",
    lessons: [
      {
        title: "Getting Started, Look Up & Check Up (WORD TEST)",
        studentBookPages: [12],
        workBookPages: [10, 11]
      },
      {
        title: "Topic 1: Good People",
        studentBookPages: [13],
        workBookPages: [12, 13, 14]
      },
      {
        title: "Topic 2: A Baker, Betty",
        studentBookPages: [14],
        workBookPages: [14, 15]
      },
      {
        title: "Unit Test",
        studentBookPages: [16, 17]
      }
    ]
  },
  {
    unit: 3,
    title: "Shapes and Things",
    lessons: [
      {
        title: "Getting Started, Look Up & Check Up (WORD TEST)",
        studentBookPages: [18],
        workBookPages: [16, 17]
      },
      {
        title: "Topic 1: What Shape Is It?",
        studentBookPages: [19],
        workBookPages: [18, 19]
      },
      {
        title: "Topic 2: What Shape is the Ball?",
        studentBookPages: [20],
        workBookPages: [20, 21]
      },
      {
        title: "Unit Test",
        studentBookPages: [22, 23]
      }
    ]
  },
  {
    unit: 4,
    title: "I am Sick",
    lessons: [
      {
        title: "Getting Started, Look Up & Check Up (WORD TEST)",
        studentBookPages: [24],
        workBookPages: [22, 23]
      },
      {
        title: "Topic 1: Chickenpox",
        studentBookPages: [25],
        workBookPages: [24, 25, 26]
      },
      {
        title: "Topic 2: Pinkeye",
        studentBookPages: [26],
        workBookPages: [26, 27]
      },
      {
        title: "Unit Test",
        studentBookPages: [28, 29]
      },
      {
        title: "Review Test 1 (Units 1-4)",
        studentBookPages: [30, 31]
      }
    ]
  },
  {
    unit: 5,
    title: "Drawing",
    lessons: [
      {
        title: "Getting Started, Look Up & Check Up (WORD TEST)",
        studentBookPages: [32],
        workBookPages: [28, 29]
      },
      {
        title: "Topic 1: Color a Picture",
        studentBookPages: [33],
        workBookPages: [30, 31]
      },
      {
        title: "Topic 2: Folding and Unfolding",
        studentBookPages: [34],
        workBookPages: [32, 33]
      },
      {
        title: "Unit Test",
        studentBookPages: [36, 37]
      }
    ]
  },
  {
    unit: 6,
    title: "Air Around Us",
    lessons: [
      {
        title: "Getting Started, Look Up & Check Up (WORD TEST)",
        studentBookPages: [38],
        workBookPages: [34, 35]
      },
      {
        title: "Topic 1: It Moves",
        studentBookPages: [39],
        workBookPages: [36, 37, 38]
      },
      {
        title: "Topic 2: What is it?",
        studentBookPages: [40],
        workBookPages: [38, 39]
      },
      {
        title: "Unit Test",
        studentBookPages: [42, 43]
      }
    ]
  },
  {
    unit: 7,
    title: "Sports",
    lessons: [
      {
        title: "Getting Started, Look Up & Check Up (WORD TEST)",
        studentBookPages: [44],
        workBookPages: [40, 41]
      },
      {
        title: "Topic 1: Taekwondo",
        studentBookPages: [45],
        workBookPages: [42, 43, 44]
      },
      {
        title: "Topic 2: Swimming",
        studentBookPages: [46],
        workBookPages: [44, 45]
      },
      {
        title: "Unit Test",
        studentBookPages: [48, 49]
      }
    ]
  },
  {
    unit: 8,
    title: "Bad Habits",
    lessons: [
      {
        title: "Getting Started, Look Up & Check Up (WORD TEST)",
        studentBookPages: [50],
        workBookPages: [46, 47]
      },
      {
        title: "Topic 1: Picking My Nose",
        studentBookPages: [51],
        workBookPages: [48, 49, 50]
      },
      {
        title: "Topic 2: Biting My Nails",
        studentBookPages: [52],
        workBookPages: [50, 51]
      },
      {
        title: "Unit Test",
        studentBookPages: [54, 55]
      },
      {
        title: "Review Test 2 (Units 5-8)",
        studentBookPages: [56, 57]
      }
    ]
  },
  {
    unit: 9,
    title: "Numbers",
    lessons: [
      {
        title: "Getting Started, Look Up & Check Up (WORD TEST)",
        studentBookPages: [58],
        workBookPages: [52, 53]
      },
      {
        title: "Topic 1: What is the Order?",
        studentBookPages: [59],
        workBookPages: [54, 55, 56]
      },
      {
        title: "Topic 2: How Many?",
        studentBookPages: [60],
        workBookPages: [56, 57, 58]
      },
      {
        title: "Unit Test",
        studentBookPages: [62, 63]
      }
    ]
  },
  {
    unit: 10,
    title: "Getting Along",
    lessons: [
      {
        title: "Getting Started, Look Up & Check Up (WORD TEST)",
        studentBookPages: [64],
        workBookPages: [59, 60]
      },
      {
        title: "Topic 1: Keep the Rules",
        studentBookPages: [65],
        workBookPages: [61, 62, 63]
      },
      {
        title: "Topic 2: Kind Twins",
        studentBookPages: [66],
        workBookPages: [63, 64]
      },
      {
        title: "Unit Test",
        studentBookPages: [68, 69]
      }
    ]
  },
  {
    unit: 11,
    title: "Having Fun",
    lessons: [
      {
        title: "Getting Started, Look Up & Check Up (WORD TEST)",
        studentBookPages: [70],
        workBookPages: [65, 66]
      },
      {
        title: "Topic 1: Let's Trade",
        studentBookPages: [71],
        workBookPages: [67, 68, 69]
      },
      {
        title: "Topic 2: Computer Games",
        studentBookPages: [72],
        workBookPages: [69, 70]
      },
      {
        title: "Unit Test",
        studentBookPages: [74, 75]
      }
    ]
  },
  {
    unit: 12,
    title: "Songs from Musicals",
    lessons: [
      {
        title: "Getting Started, Look Up & Check Up (WORD TEST)",
        studentBookPages: [76],
        workBookPages: [71, 72]
      },
      {
        title: "Topic 1: A Song for You",
        studentBookPages: [77],
        workBookPages: [73, 74, 75]
      },
      {
        title: "Topic 2: Hakuna Matata",
        studentBookPages: [78],
        workBookPages: [76, 77]
      },
      {
        title: "Unit Test",
        studentBookPages: [80, 81]
      },
      {
        title: "Review Test 3 (Units 9-12)",
        studentBookPages: [82, 83]
      }
    ]
  }
];

export const totalNumLessons = calculateTotalLessons(units);
