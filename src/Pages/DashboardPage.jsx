import HeaderGreetings from "../Dashboard component/HeaderGreetings";
import NewTaskButton from "../Dashboard component/NewtaskButton";
import SearchBar from "../Dashboard component/SearchBar";

export default function DashboardPage(){
return (


    <div className="ml-6 mt-6">
        <div>
            <HeaderGreetings />
        </div>
        

        <div className= "mt-4 display flex justify-end mr-20 ">
            <SearchBar />
            <NewTaskButton />
        </div>

        
    </div>
)
}