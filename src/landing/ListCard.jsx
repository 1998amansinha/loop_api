import React from "react";
import { data } from "../constants/CardList";

const ListCard = () => {
  return (
    <div className="min-h-screen px-10 pt-10 flex flex-col items-center relative bg-[url('https://res.cloudinary.com/do5xzpecm/image/upload/v1738651995/blob-scene-haikei_3_nt8mow.svg')] bg-cover bg-center">
      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20 w-full max-w-7xl">
        {/* First Card (Full Height) */}
        <div className="bg-card rounded-2xl shadow-lg flex flex-col max-w-md p-8 min-h-[45rem] relative">
          <div className="w-full flex justify-center">
            <img
              src={data[0].img}
              className="w-[20rem] h-[25rem] ml-32 pt-5 object-cover"
              alt={data[0].heading}
            />
          </div>
          <div className="pt-24">
            <h2 className="text-4xl font-sans font-bold text-cardTitle mb-4">
              {data[0].heading}
            </h2>
            <p className="text-md text-cardTitle font-sans text-lg">
              {data[0].description}
            </p>
          </div>
        </div>

        {/* Remaining Cards (Each Half Height) */}
        <div className="flex flex-col gap-6 w-full">
          {data.slice(1, 3).map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-lg flex max-w-5xl p-8 min-h-[21.5rem] flex-grow"
            >
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-sans font-bold text-cardTitle mb-4">
                  {item.heading}
                </h2>
                <p className="text-md text-cardPara font-sans text-lg">
                  {item.description}
                </p>
              </div>
              <div className="w-full flex justify-center">
                <img
                  src={item.img}
                  className="object-cover"
                  alt={item.heading}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListCard;
