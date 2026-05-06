import { PawPrint } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Send } from "lucide-react";

const NavBar = () => {
  return (
    <div className="w-full h-auro bg-white-custom p-5 flex flex-row-reverse justify-between items-center shadow-md shadow-orange-custom/3 z-10 fixed top-0">
      <Send className="text-orange-custom" />
      <span className="flex flex-row items-center  justify-center gap-2 text-2xl text-orange-custom font-extrabold">
        <PawPrint />
        PataPet
      </span>
      <Avatar>
        <AvatarImage src="" />
        <AvatarFallback className="bg-green-custom/20">CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default NavBar;
