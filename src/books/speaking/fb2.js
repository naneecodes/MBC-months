//Full Blast A2
import { subjects } from "../../constants";
import { calculateTotalLessons } from "../../utilities/calculateTotalLessons";

export const title = "Full Blast A2";
export const subject = subjects.SPEAKING;
export const units = [
  {
    unit: 1,
    title: "Teen Trends",
    lessons: [
      {
        //lesson 1
        title: "1a: Let's meet up",
        studentBookPages: [6, 7],
        workBookPages: [4, 5]
      },
      {
        //lesson 2
        title: "1b: Try something new",
        studentBookPages: [8, 9],
        workBookPages: [6, 7]
      },
      {
        //lesson 3
        title: "1c: Feel the beat",
        studentBookPages: [10, 11],
        workBookPages: [8, 9]
      },
      {
        //lesson 4
        title: "1d: In fashion",
        studentBookPages: [12, 13],
        workBookPages: [10, 11]
      },
      {
        //lesson 5
        title: "1e: Being a friend",
        studentBookPages: [14, 15],
        workBookPages: [12]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [16],
        workBookPages: [13, 14]
      }
    ]
  },
  {
    unit: 2,
    title: "Standing out",
    lessons: [
      {
        //lesson 1
        title: "2a: Landmarks",
        studentBookPages: [18, 19],
        workBookPages: [15, 16]
      },
      {
        //lesson 2
        title: "2b: A new look",
        studentBookPages: [20, 21],
        workBookPages: [17, 18]
      },
      {
        //lesson 3
        title: "2c: Art attack",
        studentBookPages: [22, 23],
        workBookPages: [19, 20]
      },
      {
        //lesson 4
        title: "2d: Famous faces",
        studentBookPages: [24, 25],
        workBookPages: [21, 22]
      },
      {
        //lesson 5
        title: "2e: The place to go",
        studentBookPages: [26, 27],
        workBookPages: [23]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [28],
        workBookPages: [24, 25]
      }
    ]
  },
  {
    unit: 3,
    title: "Broaden your mind",
    lessons: [
      {
        //lesson 1
        title: "3a: A learning experience",
        studentBookPages: [32, 33],
        workBookPages: [26, 27]
      },
      {
        //lesson 2
        title: "3b: Express yourself",
        studentBookPages: [34, 35],
        workBookPages: [28, 29]
      },
      {
        //lesson 3
        title: "3c: Do you speak English?",
        studentBookPages: [36, 37],
        workBookPages: [30, 31]
      },
      {
        //lesson 4
        title: "3d: A taste of culture",
        studentBookPages: [38, 39],
        workBookPages: [32]
      },
      {
        //lesson 5
        title: "3e: School days",
        studentBookPages: [40, 41],
        workBookPages: [33]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [42],
        workBookPages: [34, 35]
      }
    ]
  },
  {
    unit: 4,
    title: "The power of nature",
    lessons: [
      {
        //lesson 1
        title: "4a: The natural world",
        studentBookPages: [44, 45],
        workBookPages: [36, 37]
      },
      {
        //lesson 2
        title: "4b: A change in the weather",
        studentBookPages: [46, 47],
        workBookPages: [38, 39]
      },
      {
        //lesson 3
        title: "4c: Go wild!",
        studentBookPages: [48, 49],
        workBookPages: [40, 41]
      },
      {
        //lesson 4
        title: "4d: Whath a tragedy!",
        studentBookPages: [50, 51],
        workBookPages: [42, 43]
      },
      {
        //lesson 5
        title: "4e: Imagine that!",
        studentBookPages: [52, 53],
        workBookPages: [44]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [54],
        workBookPages: [45, 46]
      }
    ]
  },
  {
    unit: 5,
    title: "Nowadays",
    lessons: [
      {
        //lesson 1
        title: "5a: Give me a call",
        studentBookPages: [58, 59],
        workBookPages: [47, 48]
      },
      {
        //lesson 2
        title: "5b: Fitness and fun",
        studentBookPages: [60, 61],
        workBookPages: [49, 50]
      },
      {
        //lesson 3
        title: "5c: Marvelous machines",
        studentBookPages: [62, 63],
        workBookPages: [51, 52]
      },
      {
        //lesson 4
        title: "5d: Keep it green!",
        studentBookPages: [64, 65],
        workBookPages: [53, 54]
      },
      {
        //lesson 5
        title: "5e: Can you live without it?",
        studentBookPages: [66, 67],
        workBookPages: [55]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [68],
        workBookPages: [56, 57]
      }
    ]
  },
  {
    unit: 6,
    title: "Night",
    lessons: [
      {
        //lesson 1
        title: "6a: What's up there?",
        studentBookPages: [70, 71],
        workBookPages: [58, 59]
      },
      {
        //lesson 2
        title: "6b: A night out",
        studentBookPages: [72, 73],
        workBookPages: [60, 61]
      },
      {
        //lesson 3
        title: "6c: Sppoky Tales",
        studentBookPages: [74, 75],
        workBookPages: [62]
      },
      {
        //lesson 4
        title: "6d: Good night!",
        studentBookPages: [76, 77],
        workBookPages: [63, 64]
      },
      {
        //lesson 5
        title: "6e: Let's celebrate!",
        studentBookPages: [78, 79],
        workBookPages: [65]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [80],
        workBookPages: [66, 67]
      }
    ]
  },
  {
    unit: 7,
    title: "Challenge",
    lessons: [
      {
        //lesson 1
        title: "7a: Solving Crimes",
        studentBookPages: [84, 85],
        workBookPages: [68, 69]
      },
      {
        //lesson 2
        title: "7b: DIY",
        studentBookPages: [86, 87],
        workBookPages: [70]
      },
      {
        //lesson 3
        title: "7c: A friend in need",
        studentBookPages: [88, 89],
        workBookPages: [71, 72]
      },
      {
        //lesson 4
        title: "7d: Helping out",
        studentBookPages: [90, 91],
        workBookPages: [73, 74]
      },
      {
        //lesson 5
        title: "7e: Good luck!",
        studentBookPages: [92, 93],
        workBookPages: [75]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [94],
        workBookPages: [76, 77]
      }
    ]
  },
  {
    unit: 8,
    title: "Have a nice trip!",
    lessons: [
      {
        //lesson 1
        title: "8a: What an adventure!",
        studentBookPages: [96, 97],
        workBookPages: [78, 79]
      },
      {
        //lesson 2
        title: "8b: The great outdoors",
        studentBookPages: [98, 99],
        workBookPages: [80, 81]
      },
      {
        //lesson 3
        title: "8c: What went wrong?",
        studentBookPages: [100, 101],
        workBookPages: [82, 83]
      },
      {
        //lesson 4
        title: "8d: Going abroad",
        studentBookPages: [102, 103],
        workBookPages: [84]
      },
      {
        //lesson 5
        title: "8e: Vacation plans",
        studentBookPages: [104, 105],
        workBookPages: [85]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [108],
        workBookPages: [86, 87]
      }
    ]
  },
  {
    unit: 8,
    title: "EXTRA LESSONS",
    lessons: [
      {
        title: "Optional Review or Speaking Practice"
      },
      {
        title: "Optional Review or Speaking Practice"
      },
      {
        title: "Optional Review or Speaking Practice"
      }
    ]
  }
];

export const totalNumLessons = calculateTotalLessons(units);
