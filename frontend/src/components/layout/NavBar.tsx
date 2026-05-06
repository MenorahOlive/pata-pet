import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { PawPrint } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useState } from "react";

const navLinks = [
  { href: "/home", title: "Home" },
  { href: "/messages", title: "Home" },
];

const NavBar = () => {
  return (
    <>
      <div className="w-full h-auro bg-white-custom p-5 flex flex-row justify-between items-center shadow-md shadow-orange-custom/3">
        <Button className="bg-transparent p-0 h-auto w-auto">
          {" "}
          <Menu className="text-orange-custom" />
        </Button>

        <span className="flex flex-row items-center  justify-center gap-2 text-2xl text-orange-custom font-extrabold">
          <PawPrint />
          PataPet
        </span>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback className="bg-blue-700/10">CN</AvatarFallback>
        </Avatar>
      </div>
    </>
  );
};

const NavSheet = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          {" "}
          <Button className="bg-transparent p-0 h-auto w-auto">
            {" "}
            <Menu className="text-orange-custom" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px]">
          <SheetHeader>
            <SheetTitle className="text-left text-2xl font-bold">
              Menu
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default NavBar;
