import { subjects } from "../../constants";
import { calculateTotalLessons } from "../../utilities/calculateTotalLessons";

export const title = "iBT TOEFL Reading for Junior 1: Beginner";
export const subject = subjects.READING;
export const units = [
  {
    unit: 1,
    title: "History",
    lessons: [
      {
        title: "Intro: Chronological Order",
        studentBookPages: [14, 15]
      },
      {
        title: "P1 Sir Edmund Hilary",
        studentBookPages: [16]
      },
      {
        title: "P2 The Great Wall of China",
        studentBookPages: [17]
      },
      {
        title: "P3 The Civil War",
        studentBookPages: [18]
      },
      {
        title: "P4 Julius Caesar",
        studentBookPages: [19]
      },
      {
        title: "P5 The Valley of Kings",
        studentBookPages: [20]
      },
      {
        title: "P6 Washington Crosses the Delaware",
        studentBookPages: [21]
      },
      {
        title: "P7 Athenian Democracy",
        studentBookPages: [22]
      },
      {
        title: "P8 The Byzantine Empire",
        studentBookPages: [23]
      },
      {
        title: "Grammar Point: Nouns",
        studentBookPages: [24, 25]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [26, 27]
      },
      {
        title: "Practice Test: George Washington",
        studentBookPages: [28, 30]
      }
    ]
  },
  {
    unit: 2,
    title: "Geography",
    lessons: [
      {
        title: "Intro: Compare & Contrast",
        studentBookPages: [32, 33]
      },
      {
        title: "P1 Great Rivers",
        studentBookPages: [34]
      },
      {
        title: "P2 Australia and Greenland",
        studentBookPages: [35]
      },
      {
        title: "P3 Streams and Creeks",
        studentBookPages: [36]
      },
      {
        title: "P4 Canyons",
        studentBookPages: [37]
      },
      {
        title: "P5 The Earth's Poles",
        studentBookPages: [38]
      },
      {
        title: "P6 Deserts",
        studentBookPages: [39]
      },
      {
        title: "P7 Mountain Ranges",
        studentBookPages: [40]
      },
      {
        title: "P8 Korea and Japan",
        studentBookPages: [41]
      },
      {
        title: "Grammar Point: Adjectives",
        studentBookPages: [42, 43]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [44, 45]
      },
      {
        title: "Practice Test: Tundra",
        studentBookPages: [46, 48]
      }
    ]
  },
  {
    unit: 3,
    title: "Technology",
    lessons: [
      {
        title: "Intro: Cause & Effect",
        studentBookPages: [50, 51]
      },
      {
        title: "P1 The Internet",
        studentBookPages: [52]
      },
      {
        title: "P2 Flying Cars",
        studentBookPages: [53]
      },
      {
        title: "P3 The Telegraph",
        studentBookPages: [54]
      },
      {
        title: "P4 The Concorde",
        studentBookPages: [55]
      },
      {
        title: "P5 The Industrial Revolution",
        studentBookPages: [56]
      },
      {
        title: "P6 Satellites",
        studentBookPages: [57]
      },
      {
        title: "P7 Gutenberg and the Printing Press",
        studentBookPages: [58]
      },
      {
        title: "P8 Thomas Edison",
        studentBookPages: [59]
      },
      {
        title: "Grammar Point: Pronouns",
        studentBookPages: [60, 61]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [62, 63]
      },
      {
        title: "Practice Test: The Benefits of the Space Program",
        studentBookPages: [64, 66]
      }
    ]
  },
  {
    unit: 4,
    title: "Education",
    lessons: [
      {
        title: "Intro: Classification",
        studentBookPages: [68, 69]
      },
      {
        title: "P1 American Public and Private Schools",
        studentBookPages: [70]
      },
      {
        title: "P2 Friedrich Froebel",
        studentBookPages: [71]
      },
      {
        title: "P3 College Schools",
        studentBookPages: [72]
      },
      {
        title: "P4 Elite Universities",
        studentBookPages: [73]
      },
      {
        title: "P5 The First Western Universities",
        studentBookPages: [74]
      },
      {
        title: "P6 The TOEFL and TOEIC Exams",
        studentBookPages: [75]
      },
      {
        title: "P7 Homeschooling",
        studentBookPages: [76]
      },
      {
        title: "P8 Higher Education",
        studentBookPages: [77]
      },
      {
        title: "Grammar Point: Articles",
        studentBookPages: [78, 79]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [80, 81]
      },
      {
        title: "Practice Test: Lecture & Discussion Classes",
        studentBookPages: [82, 84]
      }
    ]
  },
  {
    unit: 5,
    title: "Economics",
    lessons: [
      {
        title: "Intro: Guessing Unknown Words",
        studentBookPages: [86, 87]
      },
      {
        title: "P1 Taxes",
        studentBookPages: [88]
      },
      {
        title: "P2 Adam Smith",
        studentBookPages: [89]
      },
      {
        title: "P3 Money",
        studentBookPages: [90]
      },
      {
        title: "P4 Loans",
        studentBookPages: [91]
      },
      {
        title: "P5 Recessions and Depressions",
        studentBookPages: [92]
      },
      {
        title: "P6 Economic Systems",
        studentBookPages: [93]
      },
      {
        title: "P7 Stocks",
        studentBookPages: [94]
      },
      {
        title: "P8 Supply and Demand",
        studentBookPages: [95]
      },
      {
        title: "Grammar Point: Adverbs",
        studentBookPages: [96, 97]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [98, 99]
      },
      {
        title: "Practice Test: Different Types of Money in History",
        studentBookPages: [100, 102]
      }
    ]
  },
  {
    unit: 6,
    title: "Sociology",
    lessons: [
      {
        title: "Intro: Mapping",
        studentBookPages: [104, 105]
      },
      {
        title: "P1 Divorce",
        studentBookPages: [106]
      },
      {
        title: "P2 Sports Organizations",
        studentBookPages: [107]
      },
      {
        title: "P3 Public Transportation",
        studentBookPages: [108]
      },
      {
        title: "P4 Social Media",
        studentBookPages: [109]
      },
      {
        title: "P5 THe Suburbs",
        studentBookPages: [110]
      },
      {
        title: "P6 Gated Communities",
        studentBookPages: [111]
      },
      {
        title: "P7 Single-Parent Homes",
        studentBookPages: [112]
      },
      {
        title: "P8 Peer Pressure",
        studentBookPages: [113]
      },
      {
        title: "Grammar Point: Verbs",
        studentBookPages: [114, 115]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [116, 117]
      },
      {
        title: "Practice Test: The Changing Roles of Women",
        studentBookPages: [118, 120]
      }
    ]
  },
  {
    unit: 7,
    title: "Exploration",
    lessons: [
      {
        title: "Intro: Reading Skills",
        studentBookPages: [122, 123]
      },
      {
        title: "P1 Christopher Columbus",
        studentBookPages: [124]
      },
      {
        title: "P2 John Cabot",
        studentBookPages: [125]
      },
      {
        title: "P3 Ponce de Leon",
        studentBookPages: [126]
      },
      {
        title: "P4 James Cook",
        studentBookPages: [127]
      },
      {
        title: "P5 The Vikings",
        studentBookPages: [128]
      },
      {
        title: "P6 Marco Polo",
        studentBookPages: [129]
      },
      {
        title: "P7 Underseas Exploration",
        studentBookPages: [130]
      },
      {
        title: "P8 Maps",
        studentBookPages: [131]
      },
      {
        title: "Grammar Point: Prepositions",
        studentBookPages: [132, 133]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [134, 135]
      },
      {
        title: "Practice Test: The Lewis and Clark Expedition",
        studentBookPages: [136, 138]
      }
    ]
  },
  {
    unit: 8,
    title: "Environment",
    lessons: [
      {
        title: "Intro: Outlining",
        studentBookPages: [140, 141]
      },
      {
        title: "P1 Rainforests",
        studentBookPages: [142]
      },
      {
        title: "P2 Recycling",
        studentBookPages: [143]
      },
      {
        title: "P3 Acid Rain",
        studentBookPages: [144]
      },
      {
        title: "P4 Erosion",
        studentBookPages: [145]
      },
      {
        title: "P5 Reducing Garbage",
        studentBookPages: [146]
      },
      {
        title: "P6 Hurricanes and Typhoons",
        studentBookPages: [147]
      },
      {
        title: "P7 Stopping Deforestation",
        studentBookPages: [148]
      },
      {
        title: "P8 Global Warming",
        studentBookPages: [149]
      },
      {
        title: "Grammar Point: Making Sentences",
        studentBookPages: [150, 151]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [152, 153]
      },
      {
        title: "Practice Test: Renewable Energy Sources",
        studentBookPages: [154, 156]
      }
    ]
  },
  {
    unit: 9,
    title: "Actual Tests",
    lessons: [
      {
        title: "Actual Test 1: Western Migration in the United States",
        studentBookPages: [158, 161]
      },
      {
        title: "Actual Test 2: Desertification",
        studentBookPages: [162, 165]
      },
      {
        title: "Actual Test 3: Nikola Tesla",
        studentBookPages: [166, 169]
      }
    ]
  }
];

export const totalNumLessons = calculateTotalLessons(units);
