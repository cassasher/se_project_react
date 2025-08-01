export const getWeather = (coordinates, APIkey) => {
  const { latitude, longitude } = coordinates;
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = { F: data.main.temp }; // main.temp is from the dev tools
  result.condition = data.weather[0].main.toLowerCase(); //weather is an array
  result.type = weatherType(result.temp.F);
  result.isDay = isDay(data.sys, Date.now);

  return result;
};

const isDay = ({ sunrise, sunset }, now) => {
  return sunrise * 1000 < now && now < sunset * 1000; //conversion due to discrepensy in time format (ms to sec)
};

const weatherType = (temperature) => {
  if (temperature > 75) {
    return "hot";
  } else if (temperature >= 60 && temperature < 75) {
    return "warm";
  } else {
    return "cold";
  }
};
