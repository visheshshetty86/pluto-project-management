import { X } from "lucide-react";
import { useState } from "react";

export default function TaskbuttonOverlayModal({ onClose }) {
  const [text, setText] = useState("");

  const [selectedProject, setSelectedProject] = useState("Select Project");
  const [status, setStatus] = useState("Select Status");

  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center ">
      <div className="bg-[#16161B] w-[560px] overflow-y-auto rounded-2xl border border-white/[0.06] pl-2 ">

        {/* Header */}
        <div className="p-6 flex justify-between items-center">
          <div className="text-white text-lg font-medium">
            Create New Task
          </div>

          <div className="h-8 w-8 border border-white flex justify-center items-center">
            <button
              onClick={onClose}
              className="text-white text-[12px]"
            >
              <X />
            </button>
          </div>
        </div>

        <div className="h-px w-full bg-white/[0.06]" />

        {/* Task Title */}
        <div className="p-2 mt-2">
          <span className="text-[16px] text-white">
            TASK TITLE
          </span>
        </div>

        <div className="p-2">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={60}
            placeholder="eg. design onboarding flow"
            className="w-full h-10 border border-white/[0.06] text-white placeholder:text-gray-500 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <span className="text-gray-400 text-[12px] mt-1 block">
            {text.length}/60
          </span>
        </div>

        {/* Description */}
        <div className="p-2 mt-4">
          <span className="text-[16px] text-white">
            DESCRIPTION
          </span>
        </div>

        <div className="p-2">
          <textarea
            placeholder="Add context, acceptance criteria or any notes"
            className="w-full h-24 border border-white/[0.06] text-white placeholder:text-gray-500 placeholder:text-[14px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
        </div>

        {/* Project + Status Row */}
        <div className="flex gap-4 p-2">

          {/* Project */}
          <div className="flex-1">
            <span className="text-white text-sm">
              PROJECT
            </span>

            <div className="relative mt-2">

              <div
                onClick={() =>
                  setIsProjectOpen(!isProjectOpen)
                }
                className="h-10 border border-white/[0.06] p-2 text-white cursor-pointer flex items-center"
              >
                {selectedProject}
              </div>

              {isProjectOpen && (
                <div className="absolute mt-1 w-full bg-[#1E1E24] border border-white/[0.06] rounded-md overflow-hidden z-10">

                  <div
                    className="p-2 text-white cursor-pointer hover:bg-white/10"
                    onClick={() => {
                      setSelectedProject("Project 1");
                      setIsProjectOpen(false);
                    }}
                  >
                    Project 1
                  </div>

                  <div
                    className="p-2 text-white cursor-pointer hover:bg-white/10"
                    onClick={() => {
                      setSelectedProject("Project 2");
                      setIsProjectOpen(false);
                    }}
                  >
                    Project 2
                  </div>

                  <div
                    className="p-2 text-white cursor-pointer hover:bg-white/10"
                    onClick={() => {
                      setSelectedProject("Project 3");
                      setIsProjectOpen(false);
                    }}
                  >
                    Project 3
                  </div>

                </div>
              )}
            </div>
          </div>

          {/* Status */}
          <div className="flex-1">
            <span className="text-white text-sm">
              STATUS
            </span>

            <div className="relative mt-2">

              <div
                onClick={() =>
                  setIsStatusOpen(!isStatusOpen)
                }
                className="h-10 border border-white/[0.06] p-2 text-white cursor-pointer flex items-center"
              >
                {status}
              </div>

              {isStatusOpen && (
                <div className="absolute mt-1 w-full bg-[#1E1E24] border border-white/[0.06] rounded-md overflow-hidden z-10">

                  <div
                    className="p-2 text-white cursor-pointer hover:bg-white/10"
                    onClick={() => {
                      setStatus("To Do");
                      setIsStatusOpen(false);
                    }}
                  >
                    To Do
                  </div>

                  <div
                    className="p-2 text-white cursor-pointer hover:bg-white/10"
                    onClick={() => {
                      setStatus("In Progress");
                      setIsStatusOpen(false);
                    }}
                  >
                    In Progress
                  </div>

                  <div
                    className="p-2 text-white cursor-pointer hover:bg-white/10"
                    onClick={() => {
                      setStatus("Done");
                      setIsStatusOpen(false);
                    }}
                  >
                    Done
                  </div>

                </div>
              )}
            </div>
          </div>  
        </div>
        {/* Due Date and estimate*/}
         <div className="flex gap-34 mt-2 pl-2 ">
            
            <div className = "text-white flex flex-col ">
              <span >Due date</span>
              <input type = "date" className="text-sm text-[white] border border-white/[0.06] p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2 p" >
              </input>
            </div>

            <div className = "text-white flex flex-col ">
              <span >Estimate</span>
              <input type = "text" placeholder="eg. 3h" className="text-sm text-white border border-white/[0.06] p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2 p" >
              </input>
            </div>
          </div>

          {/* Priority */} 
          <div className="flex mt-2 pl-2 ">
            <div className="text-white mt-2 ">
              <span>Priority</span>
              
              <div className="mt-4 flex gap-4">
                <button className="border border-white/[0.06] p-2 text-white hover:bg-white/10 w-[90px] rounded-md">
                  <span className= "rounded-full bg-red-500 w-3 h-3 inline-block "></span>
                  <span> High </span>
                </button>
                <button className="border border-white/[0.06] p-2 text-white hover:bg-white/10 w-[120px] rounded-md">
                  <span className= "rounded-full bg-yellow-500 w-3 h-3 inline-block mr-2"></span>
                  <span> Medium </span>
                </button>
                <button className="border border-white/[0.06] p-2 text-white hover:bg-white/10 w-[90px] rounded-md">
                  <span className= "rounded-full bg-green-500 w-3 h-3 inline-block mr-2"></span>
                  <span> Low </span>
                </button>
              </div>
            </div>
          </div>

          {/* Assignee */}
        <div className="flex mt-2 pl-2 ">
          <div className="text-white mt-2 ">
            <span>Assignee</span>
            <div className= " mt-2 gap-2 flex">
              <button className = "rounded-full bg-green-700 w-8 h-8 text-white flex items-center justify-center">
                A
              </button>
              <button className = "rounded-full bg-yellow-700 w-8 h-8 text-white flex items-center justify-center">
                B
              </button>
              <button className = "rounded-full bg-blue-700 w-8 h-8 text-white flex items-center justify-center">
                C
              </button>
            </div>
          </div>
        </div>

<div className="h-px w-full bg-white/[0.06] mt-4" />

        {/* Create Task Button */}
        <div className="flex justify-end p-6">
          <button className="bg-[#5B8DFE] text-white text-[12px] font-medium px-4 py-2 rounded-md">
            Create Task
          </button>
        </div>
      </div>
    </div>
  );  
}