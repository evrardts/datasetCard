import React from 'react';
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'

export default function Section({ title, section, handleSection }) {

  return (
    <>
    <div className="mt-1">
    <div onClick={() => handleSection()} className="cursor-pointer grid grid-cols-12 gap-16 pt-6 borders font-medium text-gray-700">
    <div className="col-span-11"> {title} </div>
    {section ?
    <BsChevronUp className="col-span-1 ml-2" />
    :
    <BsChevronDown className="col-span-1 ml-2" />
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