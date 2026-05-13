import SideMenuLayout from "../../sidemenu/SideMenuLayout/SideMenuLayout";
import DashboardPage from "../../Pages/DashboardPage";

export default function LandingPageLayout() {
 return (
   <div className="flex h-screen">
      <SideMenuLayout />

      <div className="flex-1 bg-[#111114] ">
       <DashboardPage />
      </div>

   </div>
 )
}