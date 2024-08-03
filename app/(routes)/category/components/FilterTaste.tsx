import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";

interface FiltersControlProps {
  setFilterTaste: (origin: string) => void;
}

const FilterTaste = ({ setFilterTaste }: FiltersControlProps) => {
  const { result, loading }: FilterTypes = useGetProductField();
  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Sabor</p>
      {loading && result === null && <p>Cargando origen...</p>}
      <RadioGroup
        onValueChange={(value) => {
          setFilterTaste(value);
        }}
      >
        {result !== null &&
          result.schema.attributes.taste.enum.map((taste: string) => (
            <div key={taste} className="flex items-center space-x-2">
              <RadioGroupItem value={taste} id={taste}></RadioGroupItem>
              <Label htmlFor={taste}>{taste}</Label>
            </div>
          ))}
      </RadioGroup>
    </div>
  );
};

export default FilterTaste;
