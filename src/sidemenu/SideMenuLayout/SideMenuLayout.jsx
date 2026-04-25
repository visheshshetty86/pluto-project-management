import SideMenuHeader from "../SideMenu Components/SideMenuHeader";
import SideMenuContent from "../SideMenu Components/SideMenuContent";
import SideMenuFooter from "../SideMenu Components/sideMenuFooter";

export default function SideMenuLayout() {
  return (
    <aside className="
      w-[240px]
      h-screen
      bg-[#111114]
      border-r border-gray-800
      flex flex-col
    ">

      <div className="
        h-[83px]
        px-10
        border-b border-gray-800
      ">
        <SideMenuHeader />
      </div>

      <div className="flex-1">
        <SideMenuContent />
      </div>

      <div className="mt-auto border-t border-gray-800">
        <SideMenuFooter />
      </div>

    </aside>
  )
}