import { Search } from 'lucide-react';


export default function SearchBar() {
  return (
    
      <div className=" text-[#616161] w-[225px] border border-gray-600  flex items-center gap-4 ">
        <Search className='text-gray-500' w-2 h-2 />
        <input type="text" 
        placeholder="Search Tasks and Projects"
        className='w-full outline-none border-none ' />
      </div>
  );
}
