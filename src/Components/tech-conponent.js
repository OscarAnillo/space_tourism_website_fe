import { useState } from "react";

import data from "../Data/data.json";

export const TechComponent = () => {
  const [techData, setTechData] = useState({
    image: data.technology[0].images.landscape,
    name: data.technology[0].name,
    description: data.technology[0].description,
  });

  const { image, name, description } = techData;
  return (
    <div className="tech-bg">
      <div>
        <div className="tech-text">
          <p className="space-launch-p">
            <span>03</span> space launch 101
          </p>
          <img src={image} alt="" className="tech-image" />
          <div>
            {data.technology.map((item) => (
              <div key={item.name} className="map-div-tech">
                <button
                  onClick={() =>
                    setTechData({
                      image: item.images.landscape,
                      name: item.name,
                      description: item.description,
                    })
                  }
                >
                  1
                </button>
              </div>
            ))}
          </div>
          <div>
            <p className="terminology">The terminology</p>
            <h2 className="name">{name}</h2>
            <p className="description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
