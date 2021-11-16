export interface IDatePlanning {
  id: number;
  month: string;
  day: string;
  dayStr: string;
  year: string;
  ISOdate: string;
};

const Weekdays: string[] = ['zondag', 'maandag', 'dinsdag', 'woensdag ', 'donderdag', 'vrijdag  ', 'zaterdag'];
const Months: string[] = ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];

const planningPerDays = (days: number) => {
  let dateArr: IDatePlanning[] = [];
  let today = new Date();
  for (let i=0; i < days; i++){
    let d = new Date(today.getTime() + (i*86400000))
    let dateObj:IDatePlanning= {
      id: i+1,
      month: Months[d.getMonth()],
      day: d.getDate().toString(),
      dayStr: Weekdays[d.getDay()],
      year: d.getFullYear().toString(),
      ISOdate: d.toISOString().split("T")[0]
    }
    dateArr.push(dateObj)
  }
  return dateArr;
}

const planningPerMonth = (month: number, year: number) => {
  let dateArr: IDatePlanning[] = [];
  let first = new Date(`${year}-${month}-01`);
  let daysInMonth = new Date(year, month, 0).getDate();
  for (let i=0; i < daysInMonth; i++){
    let d = new Date(first.getTime() + (i*86400000))
    let dateObj:IDatePlanning= {
      id: i+1,
      month: Months[d.getMonth()],
      day: d.getDate().toString(),
      dayStr: Weekdays[d.getDay()],
      year: d.getFullYear().toString(),
      ISOdate: d.toISOString().split("T")[0]
    }
    dateArr.push(dateObj)
  }
  return dateArr;
}

const dates = {
  Weekdays,
  Months,
  planningPerDays,
  planningPerMonth
}

export default dates