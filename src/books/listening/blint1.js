//Bricks Listening Intermeditate L1
import { subjects } from "../../constants";
import { calculateTotalLessons } from "../../utilities/calculateTotalLessons";

export const title = "Bricks Listening Intermediate L1";
export const subject = subjects.LISTENING;
export const units = [
  {
    unit: 1,
    title: "A New Term",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [6],
        workBookPages: [4, 5]
      },
      {
        title: "Topic 1: Hello Teachers",
        studentBookPages: [7],
        workBookPages: [6, 7]
      },
      {
        title: "Topic 2: Say Hello to Angela",
        studentBookPages: [8],
        workBookPages: [7, 8]
      },
      {
        title: "Topic 3: A New Term Begins",
        studentBookPages: [9],
        workBookPages: [8, 9]
      },
      {
        title: "Listening Skills (Identifying) & Unit Test",
        studentBookPages: [10, 12, 13]
      }
    ]
  },
  {
    unit: 2,
    title: "Family and Neighbors",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [14],
        workBookPages: [10, 11]
      },
      {
        title: "Topic 1: I Miss Them a Lot",
        studentBookPages: [15],
        workBookPages: [12, 13]
      },
      {
        title: "Topic 2: There are Cookies Next Door",
        studentBookPages: [16],
        workBookPages: [13, 14]
      },
      {
        title: "Topic 3: My Family Loves These Things",
        studentBookPages: [17],
        workBookPages: [14, 15]
      },
      {
        title: "Listening Skills (Finding Topics) & Unit Test",
        studentBookPages: [20, 21]
      }
    ]
  },
  {
    unit: 3,
    title: "School Life",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [22],
        workBookPages: [16, 17]
      },
      {
        title: "Topic 1: Mr. Onion Breath",
        studentBookPages: [23],
        workBookPages: [18, 19]
      },
      {
        title: "Topic 2: Music with Mr. Downing",
        studentBookPages: [24],
        workBookPages: [19, 20]
      },
      {
        title: "Topic 3: Life in School",
        studentBookPages: [25],
        workBookPages: [20, 21]
      },
      {
        title: "Listening Skills (Classifying) & Unit Test",
        studentBookPages: [28, 29]
      }
    ]
  },
  {
    unit: 4,
    title: "Hobbies",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [30],
        workBookPages: [22, 23]
      },
      {
        title: "Topic 1: What is Your Hobby?",
        studentBookPages: [31],
        workBookPages: [24, 25]
      },
      {
        title: "Topic 2: I'm Popular for My Hobbies",
        studentBookPages: [32],
        workBookPages: [25, 26]
      },
      {
        title: "Topic 3: Emily's Hobbies",
        studentBookPages: [33],
        workBookPages: [26, 27]
      },
      {
        title: "Listening Skills (Categorizing) & Unit Test",
        studentBookPages: [36, 37]
      },
      {
        title: "Review Test 1 (Units 1-4)",
        studentBookPages: [38, 39]
      }
    ]
  },
  {
    unit: 5,
    title: "Happy Birthday!",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [40],
        workBookPages: [28, 29]
      },
      {
        title: "Topic 1: Open My Present",
        studentBookPages: [41],
        workBookPages: [30, 31]
      },
      {
        title: "Topic 2: Suprise",
        studentBookPages: [42],
        workBookPages: [31, 32]
      },
      {
        title: "Topic 3: A Special Birthday Gift",
        studentBookPages: [43],
        workBookPages: [32, 33]
      },
      {
        title: "Listening Skills (Sequencing Events) & Unit Test",
        studentBookPages: [46, 47]
      }
    ]
  },
  {
    unit: 6,
    title: "Time",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [48],
        workBookPages: [34, 35]
      },
      {
        title: "Topic 1: Time, Time, Time",
        studentBookPages: [49],
        workBookPages: [36, 37]
      },
      {
        title: "Topic 2: Busy Summer Vacation Days",
        studentBookPages: [50],
        workBookPages: [37, 38]
      },
      {
        title: "Topic 3: World Festival",
        studentBookPages: [51],
        workBookPages: [38, 39]
      },
      {
        title: "Listening Skills (Focusing on Details) & Unit Test",
        studentBookPages: [54, 55]
      }
    ]
  },
  {
    unit: 7,
    title: "Making Plans",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [56],
        workBookPages: [40, 41]
      },
      {
        title: "Topic 1: Did You Check Everything?",
        studentBookPages: [57],
        workBookPages: [42, 43]
      },
      {
        title: "Topic 2: Weekend Beach Plan",
        studentBookPages: [58],
        workBookPages: [43, 44]
      },
      {
        title: "Topic 3: Let's Meet on Another Day",
        studentBookPages: [59],
        workBookPages: [44, 45]
      },
      {
        title: "Listening Skills (Focusing on Details) & Unit Test",
        studentBookPages: [62, 63]
      }
    ]
  },
  {
    unit: 8,
    title: "Weather",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [64],
        workBookPages: [46, 47]
      },
      {
        title: "Topic 1: Totally Different",
        studentBookPages: [65],
        workBookPages: [48, 49]
      },
      {
        title: "Topic 2: Mr. Dreamer's Weather Machine",
        studentBookPages: [66],
        workBookPages: [49, 50]
      },
      {
        title: "Topic 3: Weather Around the World",
        studentBookPages: [67],
        workBookPages: [50, 51]
      },
      {
        title: "Listening Skills (Focusing on Information) & Unit Test",
        studentBookPages: [70, 71]
      },
      {
        title: "Review Test 2 (Units 5-8)",
        studentBookPages: [72, 73]
      }
    ]
  },
  {
    unit: 9,
    title: "Telephone",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [74],
        workBookPages: [52, 53]
      },
      {
        title: "Topic 1: Could You Tell Him",
        studentBookPages: [75],
        workBookPages: [54, 55]
      },
      {
        title: "Topic 2: I'll Put Her On",
        studentBookPages: [76],
        workBookPages: [55, 56]
      },
      {
        title: "Topic 3: Voice Messages",
        studentBookPages: [77],
        workBookPages: [57]
      },
      {
        title: "Listening Skills (Specifying Phone Calls) & Unit Test",
        studentBookPages: [80, 81]
      }
    ]
  },
  {
    unit: 10,
    title: "Shopping",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [82],
        workBookPages: [58, 59]
      },
      {
        title: "Topic 1: Flowers for Mother",
        studentBookPages: [83],
        workBookPages: [60, 61]
      },
      {
        title: "Topic 2: What a Discount",
        studentBookPages: [84],
        workBookPages: [61, 62]
      },
      {
        title: "Topic 3: Welcome to the Mall",
        studentBookPages: [85],
        workBookPages: [62, 63]
      },
      {
        title: "Listening Skills (Acquiring Information) & Unit Test",
        studentBookPages: [88, 89]
      }
    ]
  },
  {
    unit: 11,
    title: "Fun Activities",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [90],
        workBookPages: [64, 65]
      },
      {
        title: "Topic 1: Scout Club Sign-Up",
        studentBookPages: [91],
        workBookPages: [66, 67]
      },
      {
        title: "Topic 2: Classes During Summer Vacation",
        studentBookPages: [92],
        workBookPages: [67, 68]
      },
      {
        title: "Topic 3: Join Our Club",
        studentBookPages: [93],
        workBookPages: [68, 69]
      },
      {
        title: "Listening Skills (Grouping Activities) & Unit Test",
        studentBookPages: [96, 97]
      }
    ]
  },
  {
    unit: 12,
    title: "Finding Places",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [98],
        workBookPages: [70, 71]
      },
      {
        title: "Topic 1: Looking for a Bank",
        studentBookPages: [99],
        workBookPages: [72, 73]
      },
      {
        title: "Topic 2: Which Way Should I Go?",
        studentBookPages: [100],
        workBookPages: [73, 74]
      },
      {
        title: "Topic 3: The Chocolate Museum",
        studentBookPages: [101],
        workBookPages: [74, 75]
      },
      {
        title: "Listening Skills (Describing Ways) & Unit Test",
        studentBookPages: [104, 105]
      },
      {
        title: "Review Test 3 (Units 9-12)",
        studentBookPages: [106, 107]
      }
    ]
  }
];

export const totalNumLessons = calculateTotalLessons(units);
