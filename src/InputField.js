import React from 'react';

export default function InputField({ value, title, id, rows, handleClick, handleChange }) {

  return (
    <div className="">
      <div className="text-base font-normal max-w-40 text-gray-600">
        {title}
      </div>
      <div className="mt-2 mr-4">
        <textarea value={value} onClick={(e) => handleClick(e)} onChange={(e) => handleChange(e)} id={id} name={id} rows={rows} className="font-sans p-2 shadow-sm border border-solid border-gray-300 block w-full text-gray-600 sm:text-sm rounded-md"></textarea>
      </div>
    </div>
  );
}