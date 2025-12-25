const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function formatDate(date) {
  if (typeof date === "string") return;
  else {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-us", options).format(date);
  }
}

const formatStatus = (bool) => (bool ? "Completed" : "Not completed");

export { capitalize, formatDate, formatStatus };
