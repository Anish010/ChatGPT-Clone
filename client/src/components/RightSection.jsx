import React, { useState } from "react";
import { LoadingIcon, PlaneIcon } from "../assets/icons";
import QuestionAnswer from "./QuestionAnswer";
import { API_URL } from "../config/config";

const RightSection = ({ isDarkMode }) => {
  const [prompt, setPrompt] = useState("");
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  
  return (
    <div className="h-full pl-[260px]">
      <main className="relative h-full w-full flex flex-col overflow-hidden items-stretch flex-1">
        <div className="flex-1 overflow-hidden">
          <div className={`flex flex-col text-sm h-screen ${isDarkMode ? "bg-lightBlack" : "bg-white"}`}>
            <div className="text-gray-800 w-full max-w-2xl h-full flex flex-col px-6 min-w-full ">
              {!loading && !responses && (
                <h1 className="text-3xl text-gray-100 font-semibold text-center mt-[20vh] mx-auto mb-10 ">
                  How can I help you today?
                </h1>
              )}
              {loading && (
                <div className="text-white h-full flex justify-center items-center">
                  <LoadingIcon />
                </div>
              )}
              {responses.map((response, index) => (
                <QuestionAnswer key={index} responses={response} isDarkMode={isDarkMode} />
              ))}
            </div>
            <div className="w-full h-48 flex-shrink-0"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0  !bg-transparent bg-gray-800 w-full ">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setPrompt("");
              setLoading(true);
              const res = await fetch(API_URL, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  messages: [
                    {
                      role: "user",
                      content: prompt,
                    },
                  ],
                }),
              });
              const data = await res.json();
              console.log(data);
              setResponses((prevResponses) => [...prevResponses, data]);
              setLoading(false);
            }}
            action=""
            className="flex gap-3 last:mb-6 mx-auto max-w-3xl pt-6">
            <div className="relative flex h-full flex-1 flex-col ">
              <div className={`flex flex-col w-full flex-grow py-3 relative border ${
                  isDarkMode ? "border-black/10 dark:border-gray-900/50" : "border-gray-300 dark:border-gray-600"
                } text-white rounded-md bg-${isDarkMode ? "[rgba(65,65,79,var(--tw-bg-opacity))]" : "gray-100"}`}
              >
                <input
                  type="text"
                  className={`m-0 w-full resize-none border-0 bg-transparent pl-8 focus:ring-0 focus-visibilty:ring-0 outline-none overflow-y-hidden h-[23px] ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                  value={prompt}
                  onChange={(e) => {
                    setPrompt(e.target.value);
                  }}
                />
                <button className={`absolute p-1 rounded-md ${isDarkMode ? "text-gray-400" : "text-black"} bottom-2.5 right-2 hover:bg-black hover:text-white`}>

                  <PlaneIcon />
                </button>
              </div>
            </div>
          </form>
          <div
            className={`text-center text-xs ${isDarkMode ? "text-gray-100/50" : "text-gray-600"} px-4 pt-3 pb-6`}
          >
            <span>
              ChatGPT may produce inaccurate information about people, places or
              facts.
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RightSection;
