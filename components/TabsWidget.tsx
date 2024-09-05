"use client";
import Image from "next/image";
import { useState } from "react";

const TabsWidget = () => {
  const [activeTab, setActiveTab] = useState("About Me");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <div className="bg-[#363C43] p-4 rounded-lg shadow-lg">
      <div className="flex gap-4">
        <Image
          className="hover:scale-105 cursor-pointer"
          src="/icons/questionMark.svg"
          alt="Help icon"
          width={24}
          height={24}
        />
        <div className="flex w-full mr-2 justify-between bg-[#171717] rounded-xl p-2">
          {["About Me", "Experiences", "Recommended"].map((tab) => (
            <div
              key={tab}
              className="relative z-10"
              onMouseEnter={() => setHoveredTab(tab)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <div
                className={`expand bg-custom-gradient rounded-lg h-full absolute -z-30 transition-all duration-300 ease-in-out ${
                  hoveredTab === tab ? "w-full" : "w-0"
                }`}
              ></div>
              <button
                onClick={() => setActiveTab(tab)}
                className={`unactive px-4 py-2 font-medium z-50 relative ${
                  activeTab === tab
                    ? "bg-[#28292F] text-white"
                    : "text-gray-400"
                } rounded-lg`}
              >
                {tab.replace("-", " ")}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <Image
          className="hover:scale-105 cursor-pointer"
          src="/icons/grid.svg"
          alt="Grid icon"
          width={24}
          height={24}
        />
        <div className="mt-4 pl-1 text-gray-300 min-h-32 overflow-y-auto">
          {activeTab === "About Me" && (
            <p>
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now.
            </p>
          )}
          {activeTab === "Experiences" && (
            <p>
              I was born and raised in Albany, NY & have been living in Santa
              Carla for the past 10 years...
            </p>
          )}
          {activeTab === "Recommended" && (
            <p>
              This is a great place to work! I recommend applying for a position
              here.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabsWidget;
