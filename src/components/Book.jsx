import React from "react";

const Book = ({ book }) => {
  const { title, author, description, pages, tag, imageUrl } = book;

  const getTagColor = () => {
    switch (tag) {
      case "Lendo":
        return "bg-green-500 text-gray-900";
      case "Já li":
        return "bg-blue-500 text-gray-900";
      case "Quero Ler":
        return "bg-yellow-500 text-gray-900";
      default:
        return "bg-gray-500 text-gray-900";
    }
  };

  return (
    <div className="flex justify-between items-center gap-3 bg-white rounded-lg shadow-lg p-4 h- min-h-80">
      <img
        src={imageUrl}
        alt={`${title} - ${author}`}
        className="w-full h-52 object-cover mt-4 rounded-md"
      />
      <div className="flex flex-col justify-center items-center gap-2 mt-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 text-xs">{author}</p>
        <p className=" text-justify text-base text-gray-600 w-80">
          {description}
        </p>
        <p className="text-gray-600 font-bold text-xs">{pages} páginas</p>
        <div
          className={`inline-block px-3 py-1 text-xs font-bold text-gray-800 rounded ${getTagColor()}`}
        >
          {tag}
        </div>
      </div>
    </div>
  );
};

export default Book;
