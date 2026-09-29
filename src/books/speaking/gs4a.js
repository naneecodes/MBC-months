//Get Smart 4A
import { subjects } from "../../constants";
import { calculateTotalLessons } from "../../utilities/calculateTotalLessons";

export const title = "Get Smart 4A";
export const subject = subjects.SPEAKING;
export const units = [
  {
    unit: 1,
    title: "Where are you from?",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [5]
      },
      {
        //lesson 1
        title: "Sing A Song - DAY 2",
        workBookPages: [3]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [6, 7],
        workBookPages: [4]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [8, 9],
        workBookPages: [5]
      },
      {
        //lesson 5
        title: "Let's Play",
        studentBookPages: [10],
        workBookPages: [6]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [11],
        workBookPages: [7]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [11],
        workBookPages: [7]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [11],
        workBookPages: [7]
      },
      {
        //lesson 9
        title: "Project - DAY 4",
        studentBookPages: [11],
        workBookPages: [7]
      },
      {
        //lesson 10
        title: "Project - DAY 5",
        studentBookPages: [11],
        workBookPages: [7]
      },
      {
        //lesson 11
        title: "Story Time",
        studentBookPages: [12, 13],
        workBookPages: [8]
      },
      {
        //lesson 12
        title: "Review",
        studentBookPages: [14],
        workBookPages: [9, 10, 11]
      }
    ]
  },

  {
    unit: 2,
    title: "My week",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [15]
      },
      {
        //lesson 2
        title: "Sing A Song - DAY 2",
        workBookPages: [12]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [16, 17],
        workBookPages: [13]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [18, 19],
        workBookPages: [14]
      },
      {
        //lesson 5
        title: "Let's Play",
        studentBookPages: [20],
        workBookPages: [15]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [21],
        workBookPages: [16]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [21],
        workBookPages: [16]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [21],
        workBookPages: [16]
      },

      {
        //lesson 11
        title: "Story Time",
        studentBookPages: [22, 23],
        workBookPages: [17]
      },
      {
        //lesson 12
        title: "Review",
        studentBookPages: [24],
        workBookPages: [18, 19, 20]
      }
    ]
  },
  {
    unit: 3,
    title: "In the past",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [25],
        workBookPages: [21]
      },
      {
        //lesson 2
        title: "Sing A Song - DAY 2",
        studentBookPages: [25],
        workBookPages: [21]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [26, 27],
        workBookPages: [22]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [28, 29],
        workBookPages: [23]
      },
      {
        //lesson 5
        title: "Let's Play",
        studentBookPages: [30],
        workBookPages: [24]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [31],
        workBookPages: [25]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [31],
        workBookPages: [25]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [31],
        workBookPages: [25]
      },
      {
        //lesson 9
        title: "Project - DAY 4",
        studentBookPages: [31],
        workBookPages: [25]
      },
      {
        //lesson 10
        title: "Project - DAY 5",
        studentBookPages: [31],
        workBookPages: [25]
      },
      {
        //lesson 11
        title: "Story Time",
        studentBookPages: [32, 33],
        workBookPages: [26]
      },
      {
        //lesson 12
        title: "Review",
        studentBookPages: [34],
        workBookPages: [27, 28, 29]
      }
    ]
  },
  {
    unit: 4,
    title: "Celebrations",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [35]
      },
      {
        //lesson 2
        title: "Sing A Song - DAY 2",
        workBookPages: [30]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [36, 37],
        workBookPages: [31]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [38, 39],
        workBookPages: [32]
      },
      {
        //lesson 5
        title: "Let's Play",
        studentBookPages: [40],
        workBookPages: [33]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [41],
        workBookPages: [34]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [41],
        workBookPages: [34]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [41],
        workBookPages: [34]
      },

      {
        //lesson 11
        title: "Story Time",
        studentBookPages: [42, 43],
        workBookPages: [35]
      },
      {
        //lesson 12
        title: "Review",
        studentBookPages: [44],
        workBookPages: [36, 37, 38]
      }
    ]
  },
  {
    unit: 5,
    title: "Eating right",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [45]
      },
      {
        //lesson 2
        title: "Sing A Song - DAY 2",
        workBookPages: [39]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [46, 47],
        workBookPages: [40]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [48, 49],
        workBookPages: [41]
      },
      {
        //lesson 5
        title: "Let's Play",
        studentBookPages: [50],
        workBookPages: [42]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [51],
        workBookPages: [43]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [51],
        workBookPages: [43]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [51],
        workBookPages: [43]
      },
      {
        //lesson 9
        title: "Project - DAY 4",
        studentBookPages: [51],
        workBookPages: [43]
      },
      {
        //lesson 10
        title: "Project - DAY 5",
        studentBookPages: [51],
        workBookPages: [43]
      },
      {
        //lesson 11
        title: "Reading Time",
        studentBookPages: [52, 53],
        workBookPages: [44]
      },
      {
        //lesson 12
        title: "Review",
        studentBookPages: [54],
        workBookPages: [45, 46, 47]
      }
    ]
  }
];

export const totalNumLessons = calculateTotalLessons(units);
