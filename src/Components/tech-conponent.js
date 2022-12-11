import { useState } from "react";

import data from "../Data/data.json";

export const TechComponent = () => {
  const [techData, setTechData] = useState({
    image: data.technology[0].images.landscape,
    imageDesktop: data.technology[0].images.portrait,
    name: data.technology[0].name,
    description: data.technology[0].description,
  });

  const { image, imageDesktop, name, description } = techData;

  return (
    <div className="tech-bg">
      <div>
        <div className="tech-text">
          <p className="space-launch-p">
            <span>03</span> space launch 101
          </p>
          <div className="tech-desktop-row">
            <img src={image} alt="" className="tech-image" />
            <div>
              {data.technology.map((item) => (
                <div key={item.name} className="map-div-tech">
                  <button
                    onClick={() =>
                      setTechData({
                        image: item.images.landscape,
                        imageDesktop: item.images.portrait,
                        name: item.name,
                        description: item.description,
                      })
                    }
                  >
                    {item.id}
                  </button>
                </div>
              ))}
            </div>
            <div className="tech-text-div">
              <p className="terminology">The terminology...</p>
              <h2 className="tech-name">{name}</h2>
              <p className="tech-description">{description}</p>
            </div>
            <img src={imageDesktop} alt="" className="image-desktop-portrait" />
          </div>
        </div>
      </div>
    </div>
  );
};
