//Bricks Listening 300 L1
import { subjects } from "../../constants";
import { calculateTotalLessons } from "../../utilities/calculateTotalLessons";

export const title = "Bricks Listening 300 L1";
export const subject = subjects.LISTENING;
export const units = [
  {
    unit: 1,
    title: "My Favorite Things",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [6],
        workBookPages: [4, 5]
      },
      {
        title: "Topic 1: A New Hobby",
        studentBookPages: [7],
        workBookPages: [6, 7]
      },
      {
        title: "Topic 2: Be A Superhero",
        studentBookPages: [8],
        workBookPages: [7, 8]
      },
      {
        title: "Topic 3: My Grandma is Living Her Second Life",
        studentBookPages: [9],
        workBookPages: [9, 10]
      },
      {
        title: "Speak Up (Interview) & Unit Test",
        studentBookPages: [11, 12, 13]
      }
    ]
  },
  {
    unit: 2,
    title: "Hairstyles",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [14],
        workBookPages: [11, 12]
      },
      {
        title: "Topic 1: Hair for Donation",
        studentBookPages: [15],
        workBookPages: [13, 14]
      },
      {
        title: "Topic 2: New Hairstyle",
        studentBookPages: [16],
        workBookPages: [15, 16]
      },
      {
        title: "Topic 3: Grand Opening of a New Hair Salon",
        studentBookPages: [17],
        workBookPages: [16, 17]
      },
      {
        title: "Speak Up (Interview) & Unit Test",
        studentBookPages: [18, 20, 21]
      }
    ]
  },
  {
    unit: 3,
    title: "Food and Health",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [22],
        workBookPages: [18, 19]
      },
      {
        title: "Topic 1: No More Donuts!",
        studentBookPages: [23],
        workBookPages: [20, 21]
      },
      {
        title: "Topic 2: Too Much of a Good Thing",
        studentBookPages: [24],
        workBookPages: [22, 23]
      },
      {
        title: "Topic 3: Good Food or Bad Food",
        studentBookPages: [25],
        workBookPages: [24, 25]
      },
      {
        title: "Speak Up (Survey) & Unit Test",
        studentBookPages: [26, 28, 29]
      }
    ]
  },
  {
    unit: 4,
    title: "Jobs",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [30],
        workBookPages: [26, 27]
      },
      {
        title: "Topic 1: My Mom's Job",
        studentBookPages: [31],
        workBookPages: [28, 29]
      },
      {
        title: "Topic 2: Getting Job Experience",
        studentBookPages: [32],
        workBookPages: [29, 30, 31]
      },
      {
        title: "Topic 3: Future Jobs",
        studentBookPages: [33],
        workBookPages: [31, 32]
      },
      {
        title: "Speak Up (Interview) & Unit Test",
        studentBookPages: [34, 36, 37]
      }
    ]
  },
  {
    unit: 5,
    title: "Companion Animals",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [38],
        workBookPages: [34, 35]
      },
      {
        title: "Topic 1: How to Help Abandoned Pets",
        studentBookPages: [39],
        workBookPages: [35, 36]
      },
      {
        title: "Topic 2: If You Want to Have a Pet",
        studentBookPages: [40],
        workBookPages: [37, 38]
      },
      {
        title: "Topic 3: Robot Dog, Tobby",
        studentBookPages: [41],
        workBookPages: [38, 39]
      },
      {
        title: "Speak Up (Role-play) & Unit Test",
        studentBookPages: [42, 44, 45]
      }
    ]
  },
  {
    unit: 6,
    title: "Books",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [46],
        workBookPages: [40, 41]
      },
      {
        title: "Topic 1: Two Ways to Read",
        studentBookPages: [47],
        workBookPages: [42, 43]
      },
      {
        title: "Topic 2: The Book Club",
        studentBookPages: [48],
        workBookPages: [44, 45]
      },
      {
        title: "Topic 3: Writing to Success",
        studentBookPages: [49],
        workBookPages: [46, 47]
      },
      {
        title: "Speak Up (Survey) & Unit Test",
        studentBookPages: [50, 52, 53]
      },
      {
        title: "Midterm Test",
        studentBookPages: [54, 55]
      }
    ]
  },
  {
    unit: 7,
    title: "Embarassing Moments",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [56],
        workBookPages: [48, 49]
      },
      {
        title: "Topic 1: What Happened at the Market?",
        studentBookPages: [57],
        workBookPages: [50, 51, 52]
      },
      {
        title: "Topic 2: In the Friendzone",
        studentBookPages: [58],
        workBookPages: [52, 53]
      },
      {
        title: "Topic 3: The Day of a Disaster",
        studentBookPages: [59],
        workBookPages: [53, 54]
      },
      {
        title: "Speak Up (Describe the Pictures) & Unit Test",
        studentBookPages: [60, 62, 63]
      }
    ]
  },
  {
    unit: 8,
    title: "Personality",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [64],
        workBookPages: [55, 56]
      },
      {
        title: "Topic 1: Only Alike in Appearance",
        studentBookPages: [65],
        workBookPages: [57, 58]
      },
      {
        title: "Topic 2: Personality Test",
        studentBookPages: [66],
        workBookPages: [59, 60]
      },
      {
        title: "Topic 3: Who Are You Alike in Character?",
        studentBookPages: [67],
        workBookPages: [60, 61, 62]
      },
      {
        title: "Speak Up (Survey) & Unit Test",
        studentBookPages: [68, 70, 71]
      }
    ]
  },
  {
    unit: 9,
    title: "Movies",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [72],
        workBookPages: [63, 64]
      },
      {
        title: "Topic 1: The Film Classes",
        studentBookPages: [73],
        workBookPages: [65, 66]
      },
      {
        title: "Topic 2: Film Making",
        studentBookPages: [74],
        workBookPages: [66, 67, 68]
      },
      {
        title: "Topic 3: 4D Movies",
        studentBookPages: [75],
        workBookPages: [68, 69]
      },
      {
        title: "Speak Up (Interview) & Unit Test",
        studentBookPages: [76, 78, 79]
      }
    ]
  },
  {
    unit: 10,
    title: "Traveling",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [80],
        workBookPages: [70, 71]
      },
      {
        title: "Topic 1: Summer Vacation Plans",
        studentBookPages: [81],
        workBookPages: [72, 73]
      },
      {
        title: "Topic 2: A Short Trip to New York",
        studentBookPages: [82],
        workBookPages: [74, 75]
      },
      {
        title: "Topic 3: Tips for Touring",
        studentBookPages: [83],
        workBookPages: [76, 77]
      },
      {
        title: "Speak Up (Interview) & Unit Test",
        studentBookPages: [84, 86, 87]
      }
    ]
  },
  {
    unit: 11,
    title: "Art and Design",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [88],
        workBookPages: [78, 79]
      },
      {
        title: "Topic 1: Upcycling and Spicing Up!",
        studentBookPages: [89],
        workBookPages: [80, 81]
      },
      {
        title: "Topic 2: Unique Art",
        studentBookPages: [90],
        workBookPages: [82, 83]
      },
      {
        title: "Topic 3: Universal Design",
        studentBookPages: [91],
        workBookPages: [83, 84]
      },
      {
        title: "Speak Up (Role-play) & Unit Test",
        studentBookPages: [92, 94, 95]
      }
    ]
  },
  {
    unit: 12,
    title: "Exams",
    lessons: [
      {
        title: "Warm Up & Look It Up (WORD TEST)",
        studentBookPages: [96],
        workBookPages: [85, 86]
      },
      {
        title: "Topic 1: Cheating on Exams",
        studentBookPages: [97],
        workBookPages: [88, 89]
      },
      {
        title: "Topic 2: Let's Study Together",
        studentBookPages: [98],
        workBookPages: [88, 89, 90]
      },
      {
        title: "Topic 3: Test Prep Tips",
        studentBookPages: [99],
        workBookPages: [90, 91]
      },
      {
        title: "Speak Up (Survey) & Unit Test",
        studentBookPages: [100, 102, 103]
      },
      {
        title: "Final Test",
        studentBookPages: [104, 105]
      }
    ]
  }
];

export const totalNumLessons = calculateTotalLessons(units);
