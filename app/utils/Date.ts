// 星期数组，用于将getDay()返回的数字转换为星期几的名称
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const monthsFullNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getFormatDate(date: Date) {
  const monthShort = months[date.getMonth()];
  const day = date.getDate();
  const dayOfWeek = days[date.getDay()];
  const formattedDay = day < 10 ? `0${day}` : day;
  return `${dayOfWeek},${monthShort} ${formattedDay}`;
}

export function getBookingFormatDate(date: Date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${month}/${day}/${year}`;
}

export function getYears(date: Date) {
  return date.getFullYear();
}

export function getMonth(date: Date) {
  return monthsFullNames[date.getMonth()];
}
