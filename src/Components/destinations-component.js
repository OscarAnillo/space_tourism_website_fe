import { useState } from "react";
import data from "../Data/data.json";

export const DestinationComponent = () => {
  const [destinationsData, setDestinationsData] = useState({
    image: data.destinations[0].images.png,
    name: data.destinations[0].name,
    description: data.destinations[0].description,
    distance: data.destinations[0].distance,
    travel: data.destinations[0].travel,
  });

  const { image, name, description, distance, travel } = destinationsData;
  return (
    <div className="bg-destinations">
      <div className="container">
        <div className="text-destinations">
          <p className="pick-destination">
            <span>01</span> Pick your destination
          </p>
          <img src={image} alt="" className="img-destination" />
          <div>
            {data.destinations.map((item) => (
              <div className="map-destination">
                <ul>
                  <li
                    onClick={() =>
                      setDestinationsData({
                        image: item.images.png,
                        name: item.name,
                        description: item.description,
                        distance: item.distance,
                        travel: item.travel,
                      })
                    }
                  >
                    {item.name}
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h1 className="name-destination">{name}</h1>
            <p className="description">{description}</p>
            <div className="top-line">
              <div>
                <p className="avg-distance">avg. distance</p>
                <h2 className="destination-distance">{distance}</h2>
              </div>
              <div>
                <p className="est-travel">Est. Travel Time</p>
                <h2 className="destination-travel">{travel}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
