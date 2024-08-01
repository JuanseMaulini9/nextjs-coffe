"use client";
import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./MenuList";
import ItemsMenuMobile from "./ItemsMenuMobile";
import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl mx:max-w-6xl">
      <h1 className="text-3xl" onClick={() => router.push("/")}>
        Mauju
      </h1>
      <div className="items-center justify-between hidden sm:flex">
        <MenuList/>
      </div>
      <div className="flex sm:hidden">
        <ItemsMenuMobile/>
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        <ShoppingCart
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/cart")}
        />

        <Heart
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/fav")}
        />

        <User strokeWidth="1" className="cursor-pointer" />
        <ToggleTheme></ToggleTheme>
      </div>
    </div>
  );
};

export default Navbar;
