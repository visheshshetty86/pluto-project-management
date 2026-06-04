import React, { useState } from "react";
import TaskbuttonOverlayModal from "../Dashboard component/TaskbuttonOverlayModal";

export default function NewTaskButton( ) {
    const [showModal, setshowModal] = useState(false);
    return(
        <div>
            <button 
            onClick = {() => setshowModal(true) }
            className = "bg-[#5B8DFE] text-white text-[12px] font-medium px-4 py-2 rounded-md ml-4">
                + New Task
            </button>

            {showModal && (
                <TaskbuttonOverlayModal onClose = {() => setshowModal(false)} />
            )}

        </div>
    )
}