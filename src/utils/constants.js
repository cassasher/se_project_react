export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../images/dayclear.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "cloudy",
    url: new URL("../images/daycloudy.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "fog",
    url: new URL("../images/dayfog.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "rain",
    url: new URL("../images/dayrain.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "snow",
    url: new URL("../images/daysnow.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "storm",
    url: new URL("../images/daystorm.png", import.meta.url).href,
  },

  {
    day: false,
    condition: "clear",
    url: new URL("../images/nightclear.png", import.meta.url).href,
  },

  {
    day: false,
    condition: "cloudy",
    url: new URL("../images/nightcloudy.png", import.meta.url).href,
  },

  {
    day: false,
    condition: "fog",
    url: new URL("../images/nightfog.png", import.meta.url).href,
  },

  {
    day: false,
    condition: "rain",
    url: new URL("../images/nightrain.png", import.meta.url).href,
  },

  {
    day: false,
    condition: "snow",
    url: new URL("../images/nightsnow.png", import.meta.url).href,
  },

  {
    day: false,
    condition: "storm",
    url: new URL("../images/nightstorm.png", import.meta.url).href,
  },
];

export const defaultWeatherOptions = {
  day: { url: new URL("../images/Day.png", import.meta.url).href },
  night: { url: new URL("../images/Night.png", import.meta.url).href },
};

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const coordinates = {
  latitude: 43.615021,
  longitude: -116.202316,
};

export const APIkey = "5a119832c6317ede54fb28e5a49f1348";
