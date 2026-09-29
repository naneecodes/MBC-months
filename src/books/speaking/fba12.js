//Full Blast A1.2
import { subjects } from "../../constants";
import { calculateTotalLessons } from "../../utilities/calculateTotalLessons";

export const title = "Full Blast A1.2";
export const subject = subjects.SPEAKING;
export const units = [
  {
    unit: 1,
    title: "That's Me!",
    lessons: [
      {
        //lesson 1
        title: "1a: My school",
        studentBookPages: [8, 9],
        workBookPages: [8, 9]
      },
      {
        //lesson 2
        title: "1b: At home",
        studentBookPages: [10, 11],
        workBookPages: [10, 11]
      },
      {
        //lesson 3
        title: "1c: My style",
        studentBookPages: [12, 13],
        workBookPages: [12, 13]
      },
      {
        //lesson 4
        title: "1d: In my spare time",
        studentBookPages: [14, 15],
        workBookPages: [14]
      },
      {
        //lesson 5
        title: "1e: Meet my friend",
        studentBookPages: [16, 17],
        workBookPages: [15]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [18],
        workBookPages: [16, 17]
      }
    ]
  },
  {
    unit: 2,
    title: "Exploring",
    lessons: [
      {
        //lesson 1
        title: "2a: Vacation fun",
        studentBookPages: [20, 21],
        workBookPages: [18, 19]
      },
      {
        //lesson 2
        title: "2b: City tour",
        studentBookPages: [22, 23],
        workBookPages: [20, 21]
      },
      {
        //lesson 3
        title: "2c: Exploring the past",
        studentBookPages: [24, 25],
        workBookPages: [22, 23]
      },
      {
        //lesson 4
        title: "2d: Land ahoy!",
        studentBookPages: [26, 27],
        workBookPages: [24]
      },
      {
        //lesson 5
        title: "2e: A field trip",
        studentBookPages: [28, 29],
        workBookPages: [25]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [30],
        workBookPages: [26, 27]
      }
    ]
  },
  {
    unit: 3,
    title: "Adventure",
    lessons: [
      {
        //lesson 1
        title: "3a: Ouch!",
        studentBookPages: [34, 35],
        workBookPages: [28, 29]
      },
      {
        //lesson 2
        title: "3b: Believe it or not",
        studentBookPages: [36, 37],
        workBookPages: [30, 31]
      },
      {
        //lesson 3
        title: "3c: At the amusement park",
        studentBookPages: [38, 39],
        workBookPages: [32, 33]
      },
      {
        //lesson 4
        title: "3d: Wild World",
        studentBookPages: [40, 41],
        workBookPages: [34]
      },
      {
        //lesson 5
        title: "3e: How unlucky!",
        studentBookPages: [42, 43],
        workBookPages: [35]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [44],
        workBookPages: [36, 37]
      }
    ]
  },
  {
    unit: 4,
    title: "Places",
    lessons: [
      {
        //lesson 1
        title: "4a: Around town",
        studentBookPages: [46, 47],
        workBookPages: [38, 39]
      },
      {
        //lesson 2
        title: "4b: How do I get there?",
        studentBookPages: [48, 49],
        workBookPages: [40, 41]
      },
      {
        //lesson 3
        title: "4c: City vs Country",
        studentBookPages: [50, 51],
        workBookPages: [42, 43]
      },
      {
        //lesson 4
        title: "4d: Outer space",
        studentBookPages: [52, 53],
        workBookPages: [44]
      },
      {
        //lesson 5
        title: "4e: Where I live",
        studentBookPages: [54, 55],
        workBookPages: [45]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [56],
        workBookPages: [46, 47]
      }
    ]
  },
  {
    unit: 5,
    title: "Today and tomorrow",
    lessons: [
      {
        //lesson 1
        title: "5a: Computer world",
        studentBookPages: [60, 61],
        workBookPages: [48, 49]
      },
      {
        //lesson 2
        title: "5b: What the future holds",
        studentBookPages: [62, 63],
        workBookPages: [50]
      },
      {
        //lesson 3
        title: "5c: Make a difference",
        studentBookPages: [64, 65],
        workBookPages: [51, 52]
      },
      {
        //lesson 4
        title: "5d: Protect the animals",
        studentBookPages: [66, 67],
        workBookPages: [53]
      },
      {
        //lesson 5
        title: "5e: I'm looking forward to it",
        studentBookPages: [68, 69],
        workBookPages: [54, 55]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [70],
        workBookPages: [56, 57]
      }
    ]
  },
  {
    unit: 6,
    title: "Team Spirit",
    lessons: [
      {
        //lesson 1
        title: "6a: What's on?",
        studentBookPages: [72, 73],
        workBookPages: [58, 59]
      },
      {
        //lesson 2
        title: "6b: Being in the band",
        studentBookPages: [74, 75],
        workBookPages: [60, 61]
      },
      {
        //lesson 3
        title: "6c: Dream teams",
        studentBookPages: [76, 77],
        workBookPages: [62]
      },
      {
        //lesson 4
        title: "6d: Team work",
        studentBookPages: [78, 79],
        workBookPages: [63, 64]
      },
      {
        //lesson 5
        title: "6e: Get active",
        studentBookPages: [80, 81],
        workBookPages: [65]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [82],
        workBookPages: [66, 67]
      }
    ]
  },
  {
    unit: 7,
    title: "Teen Life",
    lessons: [
      {
        //lesson 1
        title: "7a: What's wrong",
        studentBookPages: [86, 87],
        workBookPages: [68, 69]
      },
      {
        //lesson 2
        title: "7b: Messages",
        studentBookPages: [88, 89],
        workBookPages: [70]
      },
      {
        //lesson 3
        title: "7c: Let's go shopping",
        studentBookPages: [90, 91],
        workBookPages: [71, 72]
      },
      {
        //lesson 4
        title: "7d: Think healthy",
        studentBookPages: [92, 93],
        workBookPages: [73, 74]
      },
      {
        //lesson 5
        title: "7e: Teen problems",
        studentBookPages: [94, 95],
        workBookPages: [75]
      },
      {
        //lesson 6
        title: "Round-Up",
        studentBookPages: [96],
        workBookPages: [76, 77]
      }
    ]
  },
  {
    unit: 8,
    title: "Fame",
    lessons: [
      {
        //lesson 1
        title: "8a: In the headlines",
        studentBookPages: [98, 99],
        workBookPages: [78, 79]
      },
      {
        //lesson 2
        title: "8b: You can be a star",
        studentBookPages: [100, 101],
        workBookPages: [80, 81]
      },
      {
        //lesson 3
        title: "8c: Hot off the press",
        studentBookPages: [102, 103],
        workBookPages: [82]
      },
      {
        //lesson 4
        title: "8d: And the winner is...",
        studentBookPages: [104, 105],
        workBookPages: [83, 84]
      },
      {
        //lesson 5
        title: "8e: What a movie!",
        studentBookPages: [106, 107],
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
