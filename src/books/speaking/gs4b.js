//Get Smart 4A
import { subjects } from "../../constants";
import { calculateTotalLessons } from "../../utilities/calculateTotalLessons";

export const title = "Get Smart 4B";
export const subject = subjects.SPEAKING;
export const units = [
  {
    unit: 6,
    title: "Getting around",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [53]
      },
      {
        //lesson 2
        title: "Sing A Song - DAY 2",
        workBookPages: [50]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [54, 55],
        workBookPages: [51]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [56, 57],
        workBookPages: [52]
      },
      {
        //lesson 5
        title: "Let's Play",
        studentBookPages: [58],
        workBookPages: [53]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [59],
        workBookPages: [54]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [59],
        workBookPages: [54]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [59],
        workBookPages: [54]
      },

      {
        //lesson 11
        title: "Story Time",
        studentBookPages: [60, 61],
        workBookPages: [55]
      },
      {
        //lesson 12
        title: "Revision",
        studentBookPages: [62],
        workBookPages: [56, 57, 58]
      }
    ]
  },
  {
    unit: 7,
    title: "Helping out",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [63]
      },
      {
        //lesson 2
        title: "Sing A Song - DAY 2",
        workBookPages: [59]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [64, 65],
        workBookPages: [60]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [66, 67],
        workBookPages: [61]
      },
      {
        //lesson 5
        title: "Let's Play",
        studentBookPages: [68],
        workBookPages: [62]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [69],
        workBookPages: [63]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [69],
        workBookPages: [63]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [69],
        workBookPages: [63]
      },
      {
        //lesson 9
        title: "Project - DAY 4",
        studentBookPages: [69],
        workBookPages: [63]
      },
      {
        //lesson 10
        title: "Project - DAY 5",
        studentBookPages: [69],
        workBookPages: [63]
      },
      {
        //lesson 11
        title: "Story Time",
        studentBookPages: [70, 71],
        workBookPages: [64]
      },
      {
        //lesson 12
        title: "Revision",
        studentBookPages: [72],
        workBookPages: [65, 66, 67]
      }
    ]
  },
  {
    unit: 8,
    title: "Amazing animals",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [73]
      },
      {
        //lesson 2
        title: "Sing A Song - DAY 2",
        workBookPages: [68]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [74, 75],
        workBookPages: [69]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [76, 77],
        workBookPages: [70]
      },
      {
        //lesson 5
        title: "Let's Play",
        studentBookPages: [78],
        workBookPages: [71]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [79],
        workBookPages: [72]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [79],
        workBookPages: [72]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [79],
        workBookPages: [72]
      },

      {
        //lesson 11
        title: "Story Time",
        studentBookPages: [80, 81],
        workBookPages: [73]
      },
      {
        //lesson 12
        title: "Revision",
        studentBookPages: [82],
        workBookPages: [74, 75, 76]
      }
    ]
  },
  {
    unit: 9,
    title: "Get active!",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [83]
      },
      {
        //lesson 2
        title: "Sing A Song - DAY 2",
        workBookPages: [77]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [84, 85],
        workBookPages: [78]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [86, 87],
        workBookPages: [79]
      },
      {
        //lesson 5
        title: "Let's Play",
        studentBookPages: [88],
        workBookPages: [80]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [89],
        workBookPages: [81]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [89],
        workBookPages: [81]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [89],
        workBookPages: [81]
      },
      {
        //lesson 9
        title: "Project - DAY 4",
        studentBookPages: [89],
        workBookPages: [81]
      },
      {
        //lesson 10
        title: "Project - DAY 5",
        studentBookPages: [89],
        workBookPages: [81]
      },
      {
        //lesson 11
        title: "Story Time",
        studentBookPages: [90, 91],
        workBookPages: [82]
      },
      {
        //lesson 12
        title: "Revision",
        studentBookPages: [92],
        workBookPages: [83, 84, 85]
      }
    ]
  },
  {
    unit: 10,
    title: "What's the matter?",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [93]
      },
      {
        //lesson 2
        title: "Sing A Song - DAY 2",
        workBookPages: [86]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [94, 95],
        workBookPages: [87]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [96, 97],
        workBookPages: [88]
      },
      {
        //lesson 5
        title: "Let's Play",
        studentBookPages: [98],
        workBookPages: [89]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [99],
        workBookPages: [90]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [99],
        workBookPages: [90]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [99],
        workBookPages: [90]
      },

      {
        //lesson 11
        title: "Story Time",
        studentBookPages: [100, 101],
        workBookPages: [91]
      },
      {
        //lesson 12
        title: "Revision",
        studentBookPages: [102],
        workBookPages: [92, 93, 94]
      }
    ]
  },
  {
    unit: 10,
    title: "EXTRA LESSONS",
    lessons: [
      {
        title: "Board Game",
        workBookPages: [96, 97]
      },
      {
        title: "Phonics Units 1-5",
        studentBookPages: [103, 105],
        workBookPages: [98, 100]
      },
      {
        title: "Phonics Units 6-10",
        studentBookPages: [105, 107],
        workBookPages: [100, 102]
      }
    ]
  }
];

export const totalNumLessons = calculateTotalLessons(units);
