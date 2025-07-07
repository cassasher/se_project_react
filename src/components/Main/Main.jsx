import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

function Main({ weatherData, handleCardClick }) {
  const weatherAppropriateItems = defaultClothingItems.filter((item) => {
    return item.weather === weatherData.type; // This return is now inside the filter function
  });

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp.F} &deg; F / You may want to wear:
        </p>
        <ul className="cards__list">
          {weatherAppropriateItems.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
              />
            ); /* key should always go here, rather than in specific section*/
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
