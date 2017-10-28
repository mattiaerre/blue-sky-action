// https://openweathermap.org/weather-conditions
// https://getbootstrap.com/docs/4.0/utilities/colors/#background-color
const getBackgroundColor = ({ id }) => {
  if (id < 300) {
    return 'bg-danger'; // red
  }
  if (id < 800) {
    return 'bg-warning'; // yellow
  }
  if (id === 800) {
    return 'bg-success'; // green
  }
  if (id < 900) {
    return 'bg-warning'; // yellow
  }
  if (id < 950) {
    return 'bg-danger'; // red
  }
  return 'bg-info'; // blue
};

export default getBackgroundColor;
