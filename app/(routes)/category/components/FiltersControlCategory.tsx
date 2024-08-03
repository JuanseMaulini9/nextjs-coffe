import FilterOrigin from "./FilterOrigin"
import FilterTaste from "./FilterTaste"

interface FiltersCategoryProps{
  setFilterOrigin: (origin:string) => void 
  setFilterTaste: (taste:string) => void 
}

const FilterControlCategory = ({setFilterOrigin, setFilterTaste}: FiltersCategoryProps) => {
return (
  <div className="sm:-w-[350px] sm:mt-5 p-6">
    <FilterOrigin setFilterOrigin={setFilterOrigin}></FilterOrigin>
    <FilterTaste setFilterTaste={setFilterTaste}></FilterTaste>
  </div>
)
}

export default FilterControlCategory