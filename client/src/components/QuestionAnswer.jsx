import React from 'react';

const QuestionAnswer = ({ responses, isDarkMode }) => {
  const question = responses?.question?.[0]?.content;
  const answer = responses?.answer?.[0]?.message.content;

  return (
    <div className={`mx-20 max-w-3xl flex flex-col items-start mb-5`}>
      <div className={`mt-4 flex mb-10 w-full ${!isDarkMode ? 'text-black' : 'text-white'}`}>
        <div className="flex gap-7 w-full">
          <img className="w-8 h-8" src="./user.png" alt="user" />
          <p className="overflow-hidden text-ellipsis max-w-full">{question}</p>
        </div>
      </div>
      <div className={`flex w-full ${!isDarkMode ? 'text-black' : 'text-white'}`}>
        <div className="flex gap-7 w-full">
          <img className="w-8 h-8" src="./chatgpt-icon.png" alt="chatgpt" />
          <p className="overflow-hidden text-ellipsis max-w-full">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
