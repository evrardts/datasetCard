import React from 'react';
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'

export default function Section({ title, section, handleSection }) {

  return (
    <>
    <div className="mt-1">
    <div onClick={() => handleSection()} className="cursor-pointer flex justify-between inline-block pt-6 borders font-medium text-gray-700">
    <div className=""> {title} </div>
    {section ?
    <BsChevronUp className="ml-2 " />
    :
    <BsChevronDown className="ml-2" />
    }
    </div>
    </div>
    <style>{`
    .borders {
      border-bottom: solid 1px;
      border-color: #e2e8f0;
      }
    `}</style>
    </>
  );
}