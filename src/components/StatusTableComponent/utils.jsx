export const viewSizeCalculator = (value, isPixel = false) => {
  const windowSize = window.innerWidth / window.innerHeight < 2.5;

  let calculatedValue;

  if (windowSize) {
    calculatedValue = isPixel
      ? (value / 1660) * 100
      : ((value * 16) / 1660) * 100;
  } else {
    calculatedValue = isPixel
      ? (value / 1660) * 100 * 0.78
      : ((value * 16) / 1660) * 100 * 0.78;
  }

  // return `${calculatedValue}vw`;
  return `${calculatedValue?.toFixed(2)}vw` || 0; // Ensuring two decimal places

  // return addUnit ? `${calculatedValue}vw` : calculatedValue;
};

export const getBgColor = (color) => {
  switch (color) {
    case "green":
      return "#b6d7a8"; // Green color
    case "yellow":
      return "#fff2cc"; // Yellow color
    case "red":
      return "#f4cccc"; // Red color
    // case "gray":
    //   return "#a39c9c"; // Gray color
    default:
      return "#f0f0f0";
  }
};

export const months = [
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

export const columnsConfig = [
  { key: "dataBricks", label: "DataBricks" },
  { key: "sdb", label: "SDB" },
  { key: "pipeline", label: "Pipeline" },
];