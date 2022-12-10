import { useState } from "react";

import data from "../Data/data.json";

export const CrewComponent = () => {
  const [crewData, setCrewData] = useState({
    image: data.crew[0].images.png,
    name: data.crew[0].name,
    role: data.crew[0].role,
    bio: data.crew[0].bio,
  });

  const { image, name, role, bio } = crewData;
  return (
    <div className="bg-crew">
      <div className="container">
        <div className="text-crew">
          <p className="meet-crew-p">
            <span>02</span> meet your crew
          </p>
          <img src={image} alt="" className="image-crew" />
          <div className="border-div">
            {data.crew.map((item) => (
              <div key={item.name} className="map-div-crew">
                <button
                  onClick={() =>
                    setCrewData({
                      image: item.images.png,
                      name: item.name,
                      role: item.role,
                      bio: item.bio,
                    })
                  }
                >
                  {item.length}
                </button>
              </div>
            ))}
          </div>
          <div>
            <p className="role-crew">{role}</p>
            <h2 className="role-name">{name}</h2>
            <p className="role-bio">{bio}</p>
          </div>
          <img src={image} alt="" className="image-crew-tablet" />
        </div>
      </div>
    </div>
  );
};
