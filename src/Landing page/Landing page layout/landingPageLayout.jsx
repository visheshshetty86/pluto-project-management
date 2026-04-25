import SideMenuLayout from "../../sidemenu/SideMenuLayout/SideMenuLayout";

export default function LandingPageLayout() {
 return (
   <div className="flex h-screen">
      <SideMenuLayout />

      <div className="flex-1 bg-[#111114] flex items-center justify-center">
         <h1 className="text-white text-4xl michroma">
           Welcome to Pluto Project Management
         </h1>
      </div>

   </div>
 )
}