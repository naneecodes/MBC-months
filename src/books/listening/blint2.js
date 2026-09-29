//Bricks Listening Intermeditate L1
import { subjects } from "../../constants";
import { calculateTotalLessons } from "../../utilities/calculateTotalLessons";

export const title = "Bricks Listening Intermediate L2";
export const subject = subjects.LISTENING;
export const units = [
  {
    unit: 1,
    title: "What I Want to Be",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [6],
        workBookPages: [4, 5]
      },
      {
        title: "Topic 1: What Do You Want to Be?",
        studentBookPages: [7],
        workBookPages: [6, 7]
      },
      {
        title: "Topic 2: A Future Famous Singer",
        studentBookPages: [8],
        workBookPages: [7, 8]
      },
      {
        title: "Topic 3: Worrying About Future Dreams",
        studentBookPages: [9],
        workBookPages: [8, 9]
      },
      {
        title: "Listening Skills (Finding Reasons) & Unit Test",
        studentBookPages: [10, 12, 13]
      }
    ]
  },
  {
    unit: 2,
    title: "Seasons",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [14],
        workBookPages: [10, 11]
      },
      {
        title: "Topic 1: Why Do You Like or Dislike?",
        studentBookPages: [15],
        workBookPages: [12, 13]
      },
      {
        title: "Topic 2: Seasons in Different Countries",
        studentBookPages: [16],
        workBookPages: [13, 14]
      },
      {
        title: "Topic 3: The Birth of the Four Seasons",
        studentBookPages: [17],
        workBookPages: [14, 15]
      },
      {
        title: "Listening Skills (Comparing & Contrasting) & Unit Test",
        studentBookPages: [20, 21]
      }
    ]
  },
  {
    unit: 3,
    title: "Holidays",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [22],
        workBookPages: [16, 17]
      },
      {
        title: "Topic 1: Holiday Specialties",
        studentBookPages: [23],
        workBookPages: [18, 19]
      },
      {
        title: "Topic 2: Celebrating the New Year",
        studentBookPages: [24],
        workBookPages: [19, 20]
      },
      {
        title: "Topic 3: Happy Kwanzaa",
        studentBookPages: [25],
        workBookPages: [20, 21]
      },
      {
        title: "Listening Skills (Comparing & Contrasting) & Unit Test",
        studentBookPages: [28, 29]
      }
    ]
  },
  {
    unit: 4,
    title: "Order In and Eat Out",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [30],
        workBookPages: [22, 23]
      },
      {
        title: "Topic 1: Just Try It!",
        studentBookPages: [31],
        workBookPages: [24, 25]
      },
      {
        title: "Topic 2: Ordering Food",
        studentBookPages: [32],
        workBookPages: [25, 26]
      },
      {
        title: "Topic 3: The Launching of a New Pizza",
        studentBookPages: [33],
        workBookPages: [26, 27]
      },
      {
        title: "Listening Skills (Specifying Information) & Unit Test",
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
    title: "Sports",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [40],
        workBookPages: [28, 29]
      },
      {
        title: "Topic 1: Curling",
        studentBookPages: [41],
        workBookPages: [30, 31]
      },
      {
        title: "Topic 2: Sportsmanship",
        studentBookPages: [42],
        workBookPages: [31, 32]
      },
      {
        title: "Topic 3: About Team Names",
        studentBookPages: [43],
        workBookPages: [32, 33]
      },
      {
        title: "Listening Skills (Finding Supporting Details) & Unit Test",
        studentBookPages: [46, 47]
      }
    ]
  },
  {
    unit: 6,
    title: "Movies",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [48],
        workBookPages: [34, 35]
      },
      {
        title: "Topic 1: My Favorite Type of Movie",
        studentBookPages: [49],
        workBookPages: [36, 37]
      },
      {
        title: "Topic 2: Interview with a Heroine",
        studentBookPages: [50],
        workBookPages: [37, 38]
      },
      {
        title: "Topic 3: The Animation Movie, Elvis",
        studentBookPages: [51],
        workBookPages: [38, 39]
      },
      {
        title: "Listening Skills (Finding Reasons) & Unit Test",
        studentBookPages: [54, 55]
      }
    ]
  },
  {
    unit: 7,
    title: "Travel",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [56],
        workBookPages: [40, 41]
      },
      {
        title: "Topic 1: Field Trip",
        studentBookPages: [57],
        workBookPages: [42, 43]
      },
      {
        title: "Topic 2: Arizona Desert",
        studentBookPages: [58],
        workBookPages: [43, 44]
      },
      {
        title: "Topic 3: Grand Canyon",
        studentBookPages: [59],
        workBookPages: [44, 45]
      },
      {
        title: "Listening Skills (Sequencing Events) & Unit Test",
        studentBookPages: [62, 63]
      }
    ]
  },
  {
    unit: 8,
    title: "Country vs. City",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [64],
        workBookPages: [46, 47]
      },
      {
        title: "Topic 1: The Big Apple",
        studentBookPages: [65],
        workBookPages: [48, 49]
      },
      {
        title: "Topic 2: City Life or Country Life?",
        studentBookPages: [66],
        workBookPages: [49, 50]
      },
      {
        title: "Topic 3: Country Mouse or City Mouse",
        studentBookPages: [67],
        workBookPages: [50, 51]
      },
      {
        title: "Listening Skills (Comparing & Contrasting) & Unit Test",
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
    title: "Kinds of Letters",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [74],
        workBookPages: [52, 53]
      },
      {
        title: "Topic 1: Waiting for Letters",
        studentBookPages: [75],
        workBookPages: [54, 55]
      },
      {
        title: "Topic 2: Invitations",
        studentBookPages: [76],
        workBookPages: [55, 56]
      },
      {
        title: "Topic 3: Dear Ms. Wisely",
        studentBookPages: [77],
        workBookPages: [57]
      },
      {
        title: "Listening Skills (Categorizing) & Unit Test",
        studentBookPages: [80, 81]
      }
    ]
  },
  {
    unit: 10,
    title: "Television",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [82],
        workBookPages: [58, 59]
      },
      {
        title: "Topic 1: Choose One!",
        studentBookPages: [83],
        workBookPages: [60, 61]
      },
      {
        title: "Topic 2: Let's Be Advertisers!",
        studentBookPages: [84],
        workBookPages: [61, 62]
      },
      {
        title: "Topic 3: Be a Wise TV Viewer",
        studentBookPages: [85],
        workBookPages: [62, 63]
      },
      {
        title: "Listening Skills (Catching Details) & Unit Test",
        studentBookPages: [88, 89]
      }
    ]
  },
  {
    unit: 11,
    title: "Colds",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [90],
        workBookPages: [64, 65]
      },
      {
        title: "Topic 1: You Have a Cold!",
        studentBookPages: [91],
        workBookPages: [66, 67]
      },
      {
        title: "Topic 2: Herbal Medicine",
        studentBookPages: [92],
        workBookPages: [67, 68]
      },
      {
        title: "Topic 3: Protection Against Colds",
        studentBookPages: [93],
        workBookPages: [68, 69]
      },
      {
        title: "Listening Skills (Finding Causes & Effects) & Unit Test",
        studentBookPages: [96, 97]
      }
    ]
  },
  {
    unit: 12,
    title: "Great Men and Women",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [98],
        workBookPages: [70, 71]
      },
      {
        title: "Topic 1: Strength of Obama",
        studentBookPages: [99],
        workBookPages: [72, 73]
      },
      {
        title: "Topic 2: Inspired by Ban Ki-Moon",
        studentBookPages: [100],
        workBookPages: [73, 74]
      },
      {
        title: "Topic 3: Martin Luther King, Jr.",
        studentBookPages: [101],
        workBookPages: [74, 75]
      },
      {
        title: "Listening Skills (Distinguishing Facts & Opinions) & Unit Test",
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
