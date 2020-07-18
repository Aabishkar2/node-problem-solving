const input = "12:45:54PM";

const hourMap = {
  "01": "13",
  "02": "14",
  "03": "15",
  "04": "16",
  "05": "17",
  "06": "18",
  "07": "19",
  "08": "20",
  "09": "21",
  "10": "22",
  "11": "23",
  "12": "12",
};

const timeConversion = (time) => {
  if (time.slice(-2) === "PM") {
    const timeValue = time.slice(0, time.length - 2);
    const hourValue = hourMap[timeValue.slice(0, 2)];
    const restFromTimeValue = timeValue.slice(2, timeValue.length);
    const newHour = hourValue + restFromTimeValue;
    return newHour;
  } else if (time.slice(0, 2) === "12" && time.slice(-2) !== "PM") {
    const timeValue = time.slice(0, time.length - 2);
    const hourValue = "00";
    const restFromTimeValue = timeValue.slice(2, timeValue.length);
    const newHour = hourValue + restFromTimeValue;
    return newHour;
  } else {
    return time.slice(0, time.length - 2);
  }
};

console.log(timeConversion(input));
