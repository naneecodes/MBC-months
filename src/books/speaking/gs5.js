//Get Smart 5
import { subjects } from "../../constants";
import { calculateTotalLessons } from "../../utilities/calculateTotalLessons";

export const title = "Get Smart 5";
export const subject = subjects.SPEAKING;
export const units = [
  {
    unit: 1,
    title: "People",
    lessons: [
      {
        //lesson 1
        title: "Questionnaire - DAY 1",
        studentBookPages: [3]
      },
      {
        //lesson 2
        title: "Questionnaire - DAY 2",
        workBookPages: [3]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [4, 5],
        workBookPages: [4]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [6, 7],
        workBookPages: [5]
      },
      {
        //lesson 5
        title: "Let's Talk",
        studentBookPages: [8],
        workBookPages: [6]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [9],
        workBookPages: [7]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [9],
        workBookPages: [7]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [9],
        workBookPages: [7]
      },
      {
        //lesson 9
        title: "Project - DAY 4",
        studentBookPages: [9],
        workBookPages: [7]
      },
      {
        //lesson 10
        title: "Project - DAY 5",
        studentBookPages: [9],
        workBookPages: [7]
      },
      {
        //lesson 11
        title: "Reading Time",
        studentBookPages: [10, 11],
        workBookPages: [8]
      },
      {
        //lesson 12
        title: "Revision",
        studentBookPages: [12],
        workBookPages: [9, 10, 11]
      }
    ]
  },

  {
    unit: 2,
    title: "Exploring",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [13]
      },
      {
        //lesson 2
        title: "Sing A Song - DAY 2",
        workBookPages: [12]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [14, 15],
        workBookPages: [13]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [16, 17],
        workBookPages: [14]
      },
      {
        //lesson 5
        title: "Let's Talk",
        studentBookPages: [18],
        workBookPages: [15]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [19],
        workBookPages: [16]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [19],
        workBookPages: [16]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [19],
        workBookPages: [16]
      },

      {
        //lesson 11
        title: "Reading Time",
        studentBookPages: [20, 21],
        workBookPages: [17]
      },
      {
        //lesson 12
        title: "Revision",
        studentBookPages: [22],
        workBookPages: [18, 19, 20]
      }
    ]
  },
  {
    unit: 3,
    title: "Try Hard",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [23]
      },
      {
        //lesson 2
        title: "Sing A Song - DAY 2",
        workBookPages: [21]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [24, 25],
        workBookPages: [22]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [26, 27],
        workBookPages: [23]
      },
      {
        //lesson 5
        title: "Let's Play",
        studentBookPages: [28],
        workBookPages: [24]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [29],
        workBookPages: [25]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [29],
        workBookPages: [25]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [29],
        workBookPages: [25]
      },
      {
        //lesson 9
        title: "Project - DAY 4",
        studentBookPages: [29],
        workBookPages: [25]
      },
      {
        //lesson 10
        title: "Project - DAY 5",
        studentBookPages: [29],
        workBookPages: [25]
      },
      {
        //lesson 11
        title: "Story Time",
        studentBookPages: [30, 31],
        workBookPages: [26]
      },
      {
        //lesson 12
        title: "Revision",
        studentBookPages: [32],
        workBookPages: [27, 28, 29]
      }
    ]
  },
  {
    unit: 4,
    title: "Up High",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [33]
      },
      {
        //lesson 2
        title: "Sing A Song - DAY 2",
        workBookPages: [30]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [34, 35],
        workBookPages: [31]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [36, 37],
        workBookPages: [32]
      },
      {
        //lesson 5
        title: "Let's Play",
        studentBookPages: [38],
        workBookPages: [33]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [39],
        workBookPages: [34]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [39],
        workBookPages: [34]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [39],
        workBookPages: [34]
      },

      {
        //lesson 11
        title: "Story Time",
        studentBookPages: [40, 41],
        workBookPages: [35]
      },
      {
        //lesson 12
        title: "Revision",
        studentBookPages: [42],
        workBookPages: [36, 37, 38]
      }
    ]
  },
  {
    unit: 5,
    title: "It's Natural",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [43]
      },
      {
        //lesson 2
        title: "Sing A Song - DAY 2",
        workBookPages: [39]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [44, 45],
        workBookPages: [40]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [46, 47],
        workBookPages: [41]
      },
      {
        //lesson 5
        title: "Let's Play",
        studentBookPages: [48],
        workBookPages: [42]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [49],
        workBookPages: [43]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [49],
        workBookPages: [43]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [49],
        workBookPages: [43]
      },
      {
        //lesson 9
        title: "Project - DAY 4",
        studentBookPages: [49],
        workBookPages: [43]
      },
      {
        //lesson 10
        title: "Project - DAY 5",
        studentBookPages: [49],
        workBookPages: [43]
      },
      {
        //lesson 11
        title: "Story Time",
        studentBookPages: [50, 51],
        workBookPages: [44]
      },
      {
        //lesson 12
        title: "Revision",
        studentBookPages: [52],
        workBookPages: [45, 46, 47]
      }
    ]
  },
  {
    unit: 6,
    title: "One and All",
    lessons: [
      {
        //lesson 1
        title: "Do a Quiz - DAY 1",
        studentBookPages: [53]
      },
      {
        //lesson 2
        title: "Do a Quiz - DAY 2",
        workBookPages: [48]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [54, 55],
        workBookPages: [49]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [56, 57],
        workBookPages: [50]
      },
      {
        //lesson 5
        title: "Let's Talk",
        studentBookPages: [58],
        workBookPages: [51]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [59],
        workBookPages: [52]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [59],
        workBookPages: [52]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [59],
        workBookPages: [52]
      },

      {
        //lesson 11
        title: "Reading Time",
        studentBookPages: [60, 61],
        workBookPages: [53]
      },
      {
        //lesson 12
        title: "Revision",
        studentBookPages: [62],
        workBookPages: [54, 55, 56]
      }
    ]
  },
  {
    unit: 7,
    title: "Let's Help",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [63]
      },
      {
        //lesson 2
        title: "Sing A Song - DAY 2",
        workBookPages: [57]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [64, 65],
        workBookPages: [58]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [66, 67],
        workBookPages: [59]
      },
      {
        //lesson 5
        title: "Let's Talk",
        studentBookPages: [68],
        workBookPages: [60]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [69],
        workBookPages: [61]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [69],
        workBookPages: [61]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [69],
        workBookPages: [61]
      },
      {
        //lesson 9
        title: "Project - DAY 4",
        studentBookPages: [69],
        workBookPages: [61]
      },
      {
        //lesson 10
        title: "Project - DAY 5",
        studentBookPages: [69],
        workBookPages: [61]
      },
      {
        //lesson 11
        title: "Reading Time",
        studentBookPages: [70, 71],
        workBookPages: [62]
      },
      {
        //lesson 12
        title: "Revision",
        studentBookPages: [72],
        workBookPages: [63, 64, 65]
      }
    ]
  },
  {
    unit: 8,
    title: "What's Up?",
    lessons: [
      {
        //lesson 1
        title: "Directions - DAY 1",
        studentBookPages: [73]
      },
      {
        //lesson 2
        title: "Directions - DAY 2",
        workBookPages: [66]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [74, 75],
        workBookPages: [67]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [76, 77],
        workBookPages: [68]
      },
      {
        //lesson 5
        title: "Let's Talk",
        studentBookPages: [78],
        workBookPages: [69]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [79],
        workBookPages: [70]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [79],
        workBookPages: [70]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [79],
        workBookPages: [70]
      },

      {
        //lesson 11
        title: "Reading Time",
        studentBookPages: [80, 81],
        workBookPages: [71]
      },
      {
        //lesson 12
        title: "Revision",
        studentBookPages: [82],
        workBookPages: [72, 73, 74]
      }
    ]
  },
  {
    unit: 9,
    title: "Looking Ahead",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [83]
      },
      {
        //lesson 2
        title: "Sing A Song - DAY 2",
        workBookPages: [75]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [84, 85],
        workBookPages: [76]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [86, 87],
        workBookPages: [77]
      },
      {
        //lesson 5
        title: "Let's Talk",
        studentBookPages: [88],
        workBookPages: [78]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [89],
        workBookPages: [79]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [89],
        workBookPages: [79]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [89],
        workBookPages: [79]
      },
      {
        //lesson 9
        title: "Project - DAY 4",
        studentBookPages: [89],
        workBookPages: [79]
      },
      {
        //lesson 10
        title: "Project - DAY 5",
        studentBookPages: [89],
        workBookPages: [79]
      },
      {
        //lesson 11
        title: "Reading Time",
        studentBookPages: [90, 91],
        workBookPages: [80]
      },
      {
        //lesson 12
        title: "Revision",
        studentBookPages: [92],
        workBookPages: [81, 82, 83]
      }
    ]
  },
  {
    unit: 10,
    title: "Don't Panic",
    lessons: [
      {
        //lesson 1
        title: "Do a Quiz - DAY 1",
        studentBookPages: [93]
      },
      {
        //lesson 2
        title: "Do a Quiz - DAY 2",
        workBookPages: [84]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [94, 95],
        workBookPages: [85]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [96, 97],
        workBookPages: [86]
      },
      {
        //lesson 5
        title: "Let's Talk",
        studentBookPages: [98],
        workBookPages: [87]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [99],
        workBookPages: [88]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [99],
        workBookPages: [88]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [99],
        workBookPages: [88]
      },

      {
        //lesson 11
        title: "Reading Time",
        studentBookPages: [100, 101],
        workBookPages: [89]
      },
      {
        //lesson 12
        title: "Revision",
        studentBookPages: [102],
        workBookPages: [90, 91, 92]
      }
    ]
  }
];

export const totalNumLessons = calculateTotalLessons(units);
