import { subjects } from "../../constants";
import { calculateTotalLessons } from "../../utilities/calculateTotalLessons";

export const title = "Radix iBT TOEFL Listening Blue L1";
export const subject = subjects.LISTENING;
export const units = [
  {
    unit: 1,
    title: "Main Idea",
    lessons: [
      {
        title: "Basic Drills 01",
        studentBookPages: [15, 16]
      },
      {
        title: "Basic Drills 02",
        studentBookPages: [17, 18]
      },
      {
        title: "Listening Practice 01: Service Encounter",
        studentBookPages: [19, 20]
      },
      {
        title: "Listening Practice 02: Marketing",
        studentBookPages: [21, 22]
      },
      {
        title: "Listening Practice 03: Physics",
        studentBookPages: [23, 24]
      },
      {
        title: "iBT Practice: Zoology",
        studentBookPages: [25, 27]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [28, 29]
      }
    ]
  },
  {
    unit: 2,
    title: "Detail",
    lessons: [
      {
        title: "Basic Drills 01",
        studentBookPages: [31, 32]
      },
      {
        title: "Basic Drills 02",
        studentBookPages: [33, 34]
      },
      {
        title: "Listening Practice 01: Library",
        studentBookPages: [35, 36]
      },
      {
        title: "Listening Practice 02: Physics",
        studentBookPages: [37, 38]
      },
      {
        title: "Listening Practice 03: Philosophy",
        studentBookPages: [39, 40]
      },
      {
        title: "iBT Practice: Office Hours",
        studentBookPages: [41, 43]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [44, 45]
      },
      {
        title: "Actual Practice Test 1: Service Encounter",
        studentBookPages: [48, 49]
      },
      {
        title: "Actual Practice Test 2: Art History",
        studentBookPages: [50, 51]
      }
    ]
  },
  {
    unit: 3,
    title: "Function",
    lessons: [
      {
        title: "Basic Drills 01",
        studentBookPages: [55, 56]
      },
      {
        title: "Basic Drills 02",
        studentBookPages: [57, 58]
      },
      {
        title: "Listening Practice 01: Office Hours",
        studentBookPages: [59, 60]
      },
      {
        title: "Listening Practice 02: Botany",
        studentBookPages: [61, 62]
      },
      {
        title: "Listening Practice 03: Sports",
        studentBookPages: [63, 64]
      },
      {
        title: "iBT Practice: Economics",
        studentBookPages: [65, 67]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [68, 69]
      }
    ]
  },
  {
    unit: 4,
    title: "Attitude",
    lessons: [
      {
        title: "Basic Drills 01",
        studentBookPages: [71, 72]
      },
      {
        title: "Basic Drills 02",
        studentBookPages: [73, 74]
      },
      {
        title: "Listening Practice 01: Office Hours",
        studentBookPages: [75, 76]
      },
      {
        title: "Listening Practice 02: History of Science",
        studentBookPages: [77, 78]
      },
      {
        title: "Listening Practice 03: Biology",
        studentBookPages: [79, 80]
      },
      {
        title: "iBT Practice: Biology",
        studentBookPages: [81, 83]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [84, 85]
      },
      {
        title: "Actual Practice Test 1: Office Hours",
        studentBookPages: [88, 89]
      },
      {
        title: "Actual Practice Test 2: Philosophy",
        studentBookPages: [90, 91]
      }
    ]
  },
  {
    unit: 5,
    title: "Organization",
    lessons: [
      {
        title: "Basic Drills 01",
        studentBookPages: [95, 96]
      },
      {
        title: "Basic Drills 02",
        studentBookPages: [97, 98]
      },
      {
        title: "Listening Practice 01: Biology",
        studentBookPages: [99, 100]
      },
      {
        title: "Listening Practice 02: Astronomy",
        studentBookPages: [101, 102]
      },
      {
        title: "Listening Practice 03: Film Studies",
        studentBookPages: [103, 104]
      },
      {
        title: "iBT Practice: Physics",
        studentBookPages: [105, 107]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [108, 109]
      }
    ]
  },
  {
    unit: 6,
    title: "Connecting Content",
    lessons: [
      {
        title: "Basic Drills 01",
        studentBookPages: [111, 112]
      },
      {
        title: "Basic Drills 02",
        studentBookPages: [113, 114]
      },
      {
        title: "Listening Practice 01: Library",
        studentBookPages: [115, 116]
      },
      {
        title: "Listening Practice 02: Politics",
        studentBookPages: [117, 118]
      },
      {
        title: "Listening Practice 03: Geology",
        studentBookPages: [119, 120]
      },
      {
        title: "iBT Practice: Architecture",
        studentBookPages: [121, 123]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [124, 125]
      }
    ]
  },
  {
    unit: 7,
    title: "Inference",
    lessons: [
      {
        title: "Basic Drills 01",
        studentBookPages: [127, 128]
      },
      {
        title: "Basic Drills 02",
        studentBookPages: [129, 130]
      },
      {
        title: "Listening Practice 01: Office Hours",
        studentBookPages: [131, 132]
      },
      {
        title: "Listening Practice 02: Psychology",
        studentBookPages: [133, 134]
      },
      {
        title: "Listening Practice 03: Geology",
        studentBookPages: [135, 136]
      },
      {
        title: "iBT Practice: Office Hours",
        studentBookPages: [137, 139]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [140, 141]
      },
      {
        title: "Actual Practice Test 1: History",
        studentBookPages: [144, 145]
      },
      {
        title: "Actual Practice Test 2: Oceanography",
        studentBookPages: [146, 147]
      }
    ]
  }
];

export const totalNumLessons = calculateTotalLessons(units);
