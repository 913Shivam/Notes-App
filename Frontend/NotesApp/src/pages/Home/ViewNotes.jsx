import React from "react";
import { MdClose } from "react-icons/md";
import moment from "moment";

const ViewNotes = ({ noteData, onClose, getAllNotes }) => {
  return (
    <>
      <div className="relative">
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-5 -right-4 hover:bg-slate-100"
          onClick={() => {
            onClose();
            getAllNotes();
          }}
        >
          <MdClose className="text-xl text-slate-400" />
        </button>

        <div className="flex flex-col gap-3 m-1">
          <div className="text-center text-3xl font-bold">
            {noteData?.title || "Title"}
          </div>
          <div className="text-sm bg-slate-200 p-2 rounded">
            {noteData?.content || "Content"}
          </div>
          <div className="flex flex-wrap gap-2">
            {noteData?.tags.map((item, index) => (
              <div
                className="bg-green-300 p-1.5 rounded font-semibold"
                key={`${item._id}${index}`}
              >
                #{item || "Tags[]"}
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs relative -left-2 -bottom-4">
          Created on : {moment(noteData?.createdOn).format("Do MMM YYYY")}
        </div>
      </div>
    </>
  );
};

export default ViewNotes;
