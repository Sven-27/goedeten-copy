 import * as momentLocal from 'moment';
 import 'moment/locale/nl';
 import moment from "moment-timezone"

  momentLocal.locale("nl")

  export interface IDate {
    id: number;
    date: string;
    date2: string;
    name?: string;
  }

 export const dates: IDate[] = [
  {
    id: 1,
    date: moment().tz("Europe/Amsterdam").format("DD MMMM").toString(),
    date2: moment().tz("Europe/Amsterdam").format("YYYY-MM-DD").toString(),
    name: "Vandaag"
  },
  {
    id: 2,
    date: moment().add(1, "days").tz("Europe/Amsterdam").format("DD MMMM").toString(),
    date2: moment().add(1, "days").tz("Europe/Amsterdam").format("YYYY-MM-DD").toString(),
    name: "Morgen"
  },
  {
    id: 3,
    date: moment().add(2, "days").tz("Europe/Amsterdam").format("DD MMMM").toString(),
    date2: moment().add(2, "days").tz("Europe/Amsterdam").format("YYYY-MM-DD").toString(),
    name: "Overmorgen"
  },
  {
    id: 4,
    date: moment().add(3, "days").tz("Europe/Amsterdam").format("DD MMMM").toString(),
    date2: moment().add(3, "days").tz("Europe/Amsterdam").format("YYYY-MM-DD").toString(),
    },
    {
      id: 5,
      date: moment().add(4, "days").tz("Europe/Amsterdam").format("DD MMMM").toString(),
      date2: moment().add(4, "days").tz("Europe/Amsterdam").format("YYYY-MM-DD").toString(),
    },
    {
      id: 6,
     date: moment().add(5, "days").tz("Europe/Amsterdam").format("DD MMMM").toString(),
     date2: moment().add(5, "days").tz("Europe/Amsterdam").format("YYYY-MM-DD").toString(),
    },
    {
      id: 7,
      date: moment().add(6, "days").tz("Europe/Amsterdam").format("DD MMMM").toString(),
      date2: moment().add(6, "days").tz("Europe/Amsterdam").format("YYYY-MM-DD").toString(),
    },
    {
      id: 8,
      date: moment().add(7, "days").tz("Europe/Amsterdam").format("DD MMMM").toString(),
      date2: moment().add(7, "days").tz("Europe/Amsterdam").format("YYYY-MM-DD").toString(),
    },
    {
      id: 9,
     date: moment().add(8, "days").tz("Europe/Amsterdam").format("DD MMMM").toString(),
     date2: moment().add(8, "days").tz("Europe/Amsterdam").format("YYYY-MM-DD").toString(),
    },
    {
      id: 10,
     date: moment().add(9, "days").tz("Europe/Amsterdam").format("DD MMMM").toString(),
     date2: moment().add(9, "days").tz("Europe/Amsterdam").format("YYYY-MM-DD").toString(),
    },
    {
      id: 11,
      date: moment().add(10, "days").tz("Europe/Amsterdam").format("DD MMMM").toString(),
      date2: moment().add(10, "days").tz("Europe/Amsterdam").format("YYYY-MM-DD").toString(), 
    },
    {
      id: 12,
      date: moment().add(11, "days").tz("Europe/Amsterdam").format("DD MMMM").toString(),
      date2: moment().add(11, "days").tz("Europe/Amsterdam").format("YYYY-MM-DD").toString(),
    },
    {
      id: 13,
      date: moment().add(12, "days").tz("Europe/Amsterdam").format("DD MMMM").toString(),
      date2: moment().add(12, "days").tz("Europe/Amsterdam").format("YYYY-MM-DD").toString(),
    },
    {
      id: 14,
      date: moment().add(13, "days").tz("Europe/Amsterdam").format("DD MMMM").toString(),
      date2: moment().add(13, "days").tz("Europe/Amsterdam").format("YYYY-MM-DD").toString(),
    },
  ]

  export default dates