import Link from "next/link";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Menu } from "lucide-react";

const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent>
        <Link href="categories/cafe-molido" className="block">
          Cafe molido
        </Link>
        <Link href="categories/cafe-grano" className="block">
          Cafe en grano
        </Link>
        <Link href="categories/cafe-capsula" className="block">
          Cafe en capsula
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default ItemsMenuMobile;
