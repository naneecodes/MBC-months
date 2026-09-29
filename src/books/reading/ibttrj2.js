import { subjects } from "../../constants";
import { calculateTotalLessons } from "../../utilities/calculateTotalLessons";

export const title = "iBT TOEFL Reading for Junior 2: Intermediate";
export const subject = subjects.READING;
export const units = [
  {
    unit: 1,
    title: "Chemistry",
    lessons: [
      {
        title: "Question Types/Reading Skills/Sample",
        studentBookPages: [14, 15]
      },
      {
        title: "P1 Marie Curie",
        studentBookPages: [16]
      },
      {
        title: "P2 Ionization",
        studentBookPages: [17]
      },
      {
        title: "P3 Pasteurization",
        studentBookPages: [18]
      },
      {
        title: "P4 The Battery",
        studentBookPages: [19]
      },
      {
        title: "P5 Chemistry in Ancient Greece",
        studentBookPages: [20, 21]
      },
      {
        title: "P6 The Discovery of Elements",
        studentBookPages: [22, 23]
      },
      {
        title: "P7 Alfred Nobel",
        studentBookPages: [24, 25]
      },
      {
        title: "P8 The Periodic Table of Elements",
        studentBookPages: [26, 27]
      },
      {
        title: "Grammar Point",
        studentBookPages: [24, 25]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [26, 27]
      }
    ]
  },
  {
    unit: 2,
    title: "Biology",
    lessons: [
      {
        title: "Question Types/Reading Skills/Sample",
        studentBookPages: [34, 35]
      },
      {
        title: "P1 Genetically Modified Foods",
        studentBookPages: [36]
      },
      {
        title: "P2 Coral Reefs",
        studentBookPages: [37]
      },
      {
        title: "P3 Two Works by Charles Darwin",
        studentBookPages: [38]
      },
      {
        title: "P4 Microorganisms",
        studentBookPages: [39]
      },
      {
        title: "P5 Microscopes",
        studentBookPages: [40, 41]
      },
      {
        title: "P6 Photosynthesis",
        studentBookPages: [42, 43]
      },
      {
        title: "P7 Biofuel",
        studentBookPages: [44, 45]
      },
      {
        title: "P8 The History of Botany",
        studentBookPages: [46, 47]
      },
      {
        title: "Grammar Point",
        studentBookPages: [48, 49]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [50, 51]
      }
    ]
  },
  {
    unit: 3,
    title: "Culture",
    lessons: [
      {
        title: "Question Types/Reading Skills/Sample",
        studentBookPages: [54, 55]
      },
      {
        title: "P1 Monoculturalism & Multiculturalism",
        studentBookPages: [56]
      },
      {
        title: "P2 Changes in Marriage",
        studentBookPages: [57]
      },
      {
        title: "P3 The Cowboy",
        studentBookPages: [58]
      },
      {
        title: "P4 Confucianism & Buddhism",
        studentBookPages: [59]
      },
      {
        title: "P5 The Melting Pot",
        studentBookPages: [60, 61]
      },
      {
        title: "P6 Folk Culture",
        studentBookPages: [62, 63]
      },
      {
        title: "P7 Hollywood and Bollywood Movies",
        studentBookPages: [64, 65]
      },
      {
        title: "P8 Spreading Culture through Colonization",
        studentBookPages: [66, 67]
      },
      {
        title: "Grammar Point",
        studentBookPages: [68, 69]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [70, 71]
      }
    ]
  },
  {
    unit: 4,
    title: "Music",
    lessons: [
      {
        title: "Question Types/Reading Skills/Sample",
        studentBookPages: [74, 75]
      },
      {
        title: "P1 Epic Poems and Music",
        studentBookPages: [76]
      },
      {
        title: "P2 Elvis Presley",
        studentBookPages: [77]
      },
      {
        title: "P3 John Williams",
        studentBookPages: [78]
      },
      {
        title: "P4 Wolfgang Amadeus Mozart",
        studentBookPages: [79]
      },
      {
        title: "P5 The Grammy Awards",
        studentBookPages: [80, 81]
      },
      {
        title: "P6 The Development of the Saxophone",
        studentBookPages: [82, 83]
      },
      {
        title: "P7 Rock and Roll",
        studentBookPages: [84, 85]
      },
      {
        title: "P8 Changes in Classical Music",
        studentBookPages: [86, 87]
      },
      {
        title: "Grammar Point",
        studentBookPages: [88, 89]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [90, 91]
      }
    ]
  },
  {
    unit: 5,
    title: "Anthropology",
    lessons: [
      {
        title: "Question Types/Reading Skills/Sample",
        studentBookPages: [94, 95]
      },
      {
        title: "P1 Lucy",
        studentBookPages: [96]
      },
      {
        title: "P2 The Stone Age",
        studentBookPages: [97]
      },
      {
        title: "P3 Cave Paintings",
        studentBookPages: [98]
      },
      {
        title: "P4 Early Tool Making",
        studentBookPages: [99]
      },
      {
        title: "P5 Margaret Meade",
        studentBookPages: [100]
      },
      {
        title: "P6 The Bering Straight Land Bridge",
        studentBookPages: [101]
      },
      {
        title: "P7 Homo Erectus",
        studentBookPages: [102]
      },
      {
        title: "P8 Hunter-Gatherers",
        studentBookPages: [103]
      },
      {
        title: "Grammar Point",
        studentBookPages: [104, 105]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [106, 107]
      }
    ]
  },
  {
    unit: 6,
    title: "Weather",
    lessons: [
      {
        title: "Question Types/Reading Skills/Sample",
        studentBookPages: [110, 111]
      },
      {
        title: "P1 Weather Fronts",
        studentBookPages: [112]
      },
      {
        title: "P2 Climate",
        studentBookPages: [113]
      },
      {
        title: "P3 El Niño",
        studentBookPages: [114]
      },
      {
        title: "P4 The Barometer",
        studentBookPages: [115]
      },
      {
        title: "P5 Floods and Droughts",
        studentBookPages: [116, 117]
      },
      {
        title: "P6 Winter Weather Conditions",
        studentBookPages: [118, 119]
      },
      {
        title: "P7 Seasonal Changes",
        studentBookPages: [120, 121]
      },
      {
        title: "P8 The Gulf Stream",
        studentBookPages: [122, 123]
      },
      {
        title: "Grammar Point",
        studentBookPages: [124, 125]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [126, 127]
      }
    ]
  },
  {
    unit: 7,
    title: "Geology",
    lessons: [
      {
        title: "Question Types/Reading Skills/Sample",
        studentBookPages: [130, 131]
      },
      {
        title: "P1 The Properties of Gold",
        studentBookPages: [132, 133]
      },
      {
        title: "P2 Alfred Wegener and Continental Drift",
        studentBookPages: [134, 135]
      },
      {
        title: "P3 Diamond Formation",
        studentBookPages: [136, 137]
      },
      {
        title: "P4 Caves",
        studentBookPages: [138, 139]
      },
      {
        title: "P5 Strip Mining",
        studentBookPages: [140, 141]
      },
      {
        title: "P6 The Layers of the Earth",
        studentBookPages: [142, 143]
      },
      {
        title: "P7 The Pacific Ring of Fire",
        studentBookPages: [144, 145]
      },
      {
        title: "P8 Glaciation",
        studentBookPages: [146, 147]
      },
      {
        title: "Grammar Point",
        studentBookPages: [148, 149]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [150, 151]
      }
    ]
  },
  {
    unit: 8,
    title: "Medicine",
    lessons: [
      {
        title: "Question Types/Reading Skills/Sample",
        studentBookPages: [154, 155]
      },
      {
        title: "P1 Penicillin",
        studentBookPages: [156, 157]
      },
      {
        title: "P2 Gray's Anatomy",
        studentBookPages: [158, 159]
      },
      {
        title: "P3 Artificial Hearts",
        studentBookPages: [160, 161]
      },
      {
        title: "P4 William Harvey",
        studentBookPages: [162, 163]
      },
      {
        title: "P5 Vaccines",
        studentBookPages: [164, 165]
      },
      {
        title: "P6 Organ Transplants",
        studentBookPages: [166, 167]
      },
      {
        title: "P7 Cancer",
        studentBookPages: [168, 169]
      },
      {
        title: "P8 Medical Imaging",
        studentBookPages: [170, 171]
      },
      {
        title: "Grammar Point",
        studentBookPages: [172, 173]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [174, 175]
      }
    ]
  },
  {
    unit: 8,
    title: "EXTRA TESTS",
    lessons: [
      {
        title: "Actual Test 1: Weather",
        studentBookPages: [178, 180]
      },
      {
        title: "Actual Test 2: Medicine",
        studentBookPages: [181, 183]
      },
      {
        title: "Actual Test 3: Geology",
        studentBookPages: [184, 186]
      },
      {
        title: "Actual Test 4: Culture",
        studentBookPages: [187, 189]
      }
    ]
  }
];

export const totalNumLessons = calculateTotalLessons(units);
