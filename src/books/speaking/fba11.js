//Full Blast A1.1
import { subjects } from "../../constants";
import { calculateTotalLessons } from "../../utilities/calculateTotalLessons";

export const title = "Full Blast A1.1";
export const subject = subjects.SPEAKING;
export const units = [
  {
    unit: 1,
    title: "Who are you?",
    lessons: [
      {
        //lesson 1
        title: "1a: Where are you from?",
        studentBookPages: [10, 11],
        workBookPages: [8, 9]
      },
      {
        //lesson 2
        title: "1b: He's a chef",
        studentBookPages: [12, 13],
        workBookPages: [10, 11]
      },
      {
        //lesson 3
        title: "1c: Day and night",
        studentBookPages: [14, 15],
        workBookPages: [12]
      },
      {
        //lesson 4
        title: "1d: Meet the band",
        studentBookPages: [16, 17],
        workBookPages: [13]
      },
      {
        //lesson 5
        title: "1e: I'm a student",
        studentBookPages: [18, 19],
        workBookPages: [14, 15]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [20],
        workBookPages: [16, 17]
      }
    ]
  },
  {
    unit: 2,
    title: "All about me",
    lessons: [
      {
        //lesson 1
        title: "2a: My Things",
        studentBookPages: [22, 23],
        workBookPages: [18, 19]
      },
      {
        //lesson 2
        title: "2b: My clothes",
        studentBookPages: [24, 25],
        workBookPages: [20, 21]
      },
      {
        //lesson 3
        title: "2c: My pet",
        studentBookPages: [26, 27],
        workBookPages: [22, 23]
      },
      {
        //lesson 4
        title: "2d: You're a star!",
        studentBookPages: [28, 29],
        workBookPages: [24]
      },
      {
        //lesson 5
        title: "2e: My best friend",
        studentBookPages: [30, 31],
        workBookPages: [25]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [32],
        workBookPages: [26, 27]
      }
    ]
  },
  {
    unit: 3,
    title: "It's my life!",
    lessons: [
      {
        //lesson 1
        title: "3a: Day in day out",
        studentBookPages: [36, 37],
        workBookPages: [28, 29]
      },
      {
        //lesson 2
        title: "3b: Do you like sports?",
        studentBookPages: [38, 39],
        workBookPages: [30, 31]
      },
      {
        //lesson 3
        title: "3c: Time out",
        studentBookPages: [40, 41],
        workBookPages: [32]
      },
      {
        //lesson 4
        title: "3d: Around the house",
        studentBookPages: [42, 43],
        workBookPages: [33, 34]
      },
      {
        //lesson 5
        title: "3e: My favorite day",
        studentBookPages: [44, 45],
        workBookPages: [35]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [46],
        workBookPages: [36, 37]
      }
    ]
  },
  {
    unit: 4,
    title: "Where I live",
    lessons: [
      {
        //lesson 1
        title: "4a: Home sweet home",
        studentBookPages: [48, 49],
        workBookPages: [38, 39]
      },
      {
        //lesson 2
        title: "4b: Where is it?",
        studentBookPages: [50, 51],
        workBookPages: [40, 41]
      },
      {
        //lesson 3
        title: "4c: My neighborhood",
        studentBookPages: [52, 53],
        workBookPages: [42, 43]
      },
      {
        //lesson 4
        title: "4d: Places to visit",
        studentBookPages: [54, 55],
        workBookPages: [44]
      },
      {
        //lesson 5
        title: "4e: My house",
        studentBookPages: [56, 57],
        workBookPages: [45]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [58],
        workBookPages: [46, 47]
      }
    ]
  },
  {
    unit: 5,
    title: "Nice and tasty",
    lessons: [
      {
        //lesson 1
        title: "5a: Delicious!",
        studentBookPages: [63],
        workBookPages: [48, 49]
      },
      {
        //lesson 2
        title: "5b: Let's order!",
        studentBookPages: [64, 65],
        workBookPages: [50, 51]
      },
      {
        //lesson 3
        title: "5c: You are what you eat",
        studentBookPages: [66, 67],
        workBookPages: [52, 53]
      },
      {
        //lesson 4
        title: "5d: Food Facts",
        studentBookPages: [68, 69],
        workBookPages: [54]
      },
      {
        //lesson 5
        title: "5e: Three square meals",
        studentBookPages: [70, 71],
        workBookPages: [55]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [72],
        workBookPages: [56, 57]
      }
    ]
  },
  {
    unit: 6,
    title: "Events",
    lessons: [
      {
        //lesson 1
        title: "6a: Part time!",
        studentBookPages: [74, 75],
        workBookPages: [58, 59]
      },
      {
        //lesson 2
        title: "6b: Rain or shine",
        studentBookPages: [76, 77],
        workBookPages: [60, 61]
      },
      {
        //lesson 3
        title: "6c: Save the animals",
        studentBookPages: [78, 79],
        workBookPages: [62, 63]
      },
      {
        //lesson 4
        title: "6d: Let's celebrate!",
        studentBookPages: [80, 81],
        workBookPages: [64]
      },
      {
        //lesson 5
        title: "6e: Best wishes",
        studentBookPages: [82, 83],
        workBookPages: [65]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [84],
        workBookPages: [66, 67]
      }
    ]
  },
  {
    unit: 7,
    title: "What an experience!",
    lessons: [
      {
        //lesson 1
        title: "7a: Were you scared?",
        studentBookPages: [88, 89],
        workBookPages: [68, 69]
      },
      {
        //lesson 2
        title: "7b: Dear Diary",
        studentBookPages: [90, 91],
        workBookPages: [70]
      },
      {
        //lesson 3
        title: "7c: What happened?",
        studentBookPages: [92, 93],
        workBookPages: [71, 72]
      },
      {
        //lesson 4
        title: "7d: A great movie",
        studentBookPages: [94, 95],
        workBookPages: [73, 74]
      },
      {
        //lesson 5
        title: "7e: A day to remember",
        studentBookPages: [96, 97],
        workBookPages: [75]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [98],
        workBookPages: [76, 77]
      }
    ]
  },
  {
    unit: 8,
    title: "See the world",
    lessons: [
      {
        //lesson 1
        title: "8a: On the move",
        studentBookPages: [100, 101],
        workBookPages: [78, 79]
      },
      {
        //lesson 2
        title: "8b: Going camping",
        studentBookPages: [102, 103],
        workBookPages: [80]
      },
      {
        //lesson 3
        title: "8c: A new experience",
        studentBookPages: [104, 105],
        workBookPages: [81, 82]
      },
      {
        //lesson 4
        title: "8d: Country profile",
        studentBookPages: [106, 107],
        workBookPages: [83, 84]
      },
      {
        //lesson 5
        title: "8e: On vacation",
        studentBookPages: [108, 109],
        workBookPages: [85]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [110],
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
