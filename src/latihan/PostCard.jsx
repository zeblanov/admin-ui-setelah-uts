import React, { useState } from "react";

const PostCard = ({ title, body }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => setIsClicked((prev) => !prev);

  const buttonClass = isClicked
    ? "bg-red-600 hover:bg-red-700"
    : "bg-gray-700 hover:bg-gray-600";

  const buttonText = isClicked ? "Tombol sudah diklik" : "Silakan Klik";

  const formattedBody = body.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div
      className="
        max-w-xs w-full bg-white p-5 rounded-lg shadow-md
        transition-all duration-300 transform
        hover:scale-[1.03] hover:bg-pink-100 hover:shadow-lg
        flex flex-col justify-between border border-transparent hover:border-gray-300
      "
    >
      <div>
        <h3 className="text-lg font-bold mb-2 text-gray-800 uppercase">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{formattedBody}</p>
      </div>

      <button
        onClick={handleButtonClick}
        className={`
          w-full text-white text-base font-semibold py-2.5 px-4 rounded-md
          transition-all duration-200 transform active:scale-95
          ${buttonClass}
        `}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PostCard;
