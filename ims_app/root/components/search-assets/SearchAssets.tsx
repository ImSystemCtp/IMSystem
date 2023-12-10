import SearchByLocation from "./SearchByLocation";
import SearchNoAssets from "./SearchNoAssets";
export default function SearchAssets() {
    return (
        <div className="border-2  rounded-lg border-slate-300 shadow-sm shadow-slate-300 flex flex-col md:flex-row md:m-2 md:p-2">
            <SearchNoAssets />
            
            <SearchByLocation />
        </div>
    )
}