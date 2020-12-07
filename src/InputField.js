import React from 'react';

export default function InputField({ title, id, rows, handleClick, handleChange }) {

  return (
    <div className="w-full">
    <div className="pt-6 md:grid md:grid-cols-12 md:gap-8">
      <dt className="text-base font-medium max-w-40 text-gray-700 md:col-span-4">
        {title}
      </dt>
      <dd className="mt-2 md:mt-0 md:col-span-8 mr-6">
        <textarea onClick={(e) => handleClick(e)} onChange={(e) => handleChange(e)} id={id} name={id} rows={rows} className="font-sans p-2 shadow-sm border border-solid border-gray-300 block w-full text-gray-600 sm:text-sm rounded-md"></textarea>
      </dd>
    </div>
    </div>
  );
}