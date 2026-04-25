import { LayoutDashboard } from "lucide-react";
import { SquareKanban } from "lucide-react";
import { Diamond } from "lucide-react";
import { Minus } from "lucide-react";
import { Users } from 'lucide-react';
import { Settings } from 'lucide-react';

export default function SideMenuContent() {
  return (
    <div className=" relative   ">
      <div className="mt-4  text-white pl-4 ">
        <span className="michroma text-gray-400 text-[12px]">workspace</span>
      </div>

      <div className="mt-4 text-[14px]">
        <div className="group flex items-center gap-3 px-6 py-3 hover:bg-gray-800 cursor-pointer">
          <LayoutDashboard className="text-gray-500 group-hover:text-white" />
          <span className="text-gray-500 group-hover:text-white transition-colors">
            Dashboard
          </span>
        </div>

        <div className="group flex items-center gap-3 px-6 py-3 hover:bg-gray-800 cursor-pointer">
          <SquareKanban className="text-gray-500 group-hover:text-white" />
          <span className="text-gray-500 group-hover:text-white">
            Kanban Board
          </span>
        </div>

        <div className="group flex items-center gap-3 px-6 py-3 hover:bg-gray-800 cursor-pointer">
          <Diamond className="text-gray-500 group-hover:text-white" />
          <span className="text-gray-500 group-hover:text-white">Projects</span>
        </div>

        <div className="group flex items-center gap-3 px-6 py-3 hover:bg-gray-800 cursor-pointer">
          <Minus className="text-gray-500 group-hover:text-white" />
          <span className="text-gray-500 group-hover:text-white">Timeline</span>
        </div>
      </div>

      <div className=" h-px bg-gray-700 mt-4"></div>

      <div className="mt-4  text-white pl-4 ">
        <span className="michroma text-gray-400 text-[12px]">People</span>
      </div>


      <div className="mt-4 text-[14px]">
      
        <div className="group flex items-center gap-3 px-6 py-3 hover:bg-gray-800 cursor-pointer">
          <Users className="text-gray-500 group-hover:text-white" />
          <span className="text-gray-500 group-hover:text-white">Team Members</span>
        </div>
      </div>

  <div className=" h-px bg-gray-700 mt-4"></div>
  
         <div className="mt-4  text-white pl-4 ">
        <span className="michroma text-gray-400 text-[12px]">Task</span>
      </div>


      <div className="mt-4 text-[14px]">
      
        <div className="group flex items-center gap-3 px-6 py-3 hover:bg-gray-800 cursor-pointer">
          <Users className="text-gray-500 group-hover:text-white" />
          <span className="text-gray-500 group-hover:text-white">Task Detail</span>
        </div>
      </div>

        <div className=" h-px bg-gray-700 mt-4"></div>

        <div className="group flex items-center gap-3 px-6 py-3 hover:bg-gray-800 cursor-pointer mb-4 mt-2">
          <Settings className="text-gray-500 group-hover:text-white" />
          <span className="text-gray-500 group-hover:text-white">Settings</span>
        </div>
    </div>
  );
}
